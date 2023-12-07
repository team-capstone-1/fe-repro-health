import { useState } from "react";
import { Flex, Col, Row, Button, Space, Select } from "antd";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import ModalCancelArticle from "@/components/shared-components/ModalCancelArticle";
import ModalSuccessArticle from "@/components/shared-components/ModalSuccessArticle";

import { APIArticle } from "@/apis/APIArticle";

const UploadArticle = () => {
  useDocumentTitle("Unggah Artikel");

  const [imagePreview, setImagePreview] = useState(null);
  const [isShowCancel, setIsShowCancel] = useState(false);
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  const MAX_IMAGE_SIZE = 25000000;
  const ALLOWED_IMAGE_TYPE = ["image/jpeg", "image/png"];

  //   Module from React Quill
  const module = {
    toolbar: [
      ["bold", "underline", "italic"],
      [{ list: "bullet" }],
      ["image", "link"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ['clean']
    ],
  };

  const schema = yup.object().shape({
    title: yup.string().required("Judul harus diisi"),
    // tags: yup.array().required("Setiap tag harus diisi"),
    tags: yup.string().required("Tag harus diisi"),
    reference: yup.string().required("Referensi harus diisi"),
    image: yup
      .mixed()
      .test("required", "Gambar harus diisi", (value) => {
        return !!value;
      })
      .test(
        "fileSize",
        "Ukuran file terlalu besar, maksimal 20 MB",
        (value) => {
          return value.size <= MAX_IMAGE_SIZE;
        },
      )
      .test(
        "fileType",
        "Format file tidak valid, hanya file gambar yang diperbolehkan",
        (value) => {
          return ALLOWED_IMAGE_TYPE.includes(value.type);
        },
      ),
    image_desc: yup.string().required("Deskripsi gambar harus diisi"),
    content: yup.string().required("Isi artikel harus diisi"),
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitArticle = (data) => {
    const addArticle = async () => {
      try {
        const result = await APIArticle.addArticle(data);
        console.log(result);
        reset();
        setImagePreview(null);
      } catch (err) {
        console.log(err);
      }
    }
    addArticle();
  };

  const handleOpenModalCancel = () => {
    setIsShowCancel((prev) => !prev);
  };
  const handleOpenModalSuccess = () => {
    setIsShowSuccess((prev) => !prev);
  };

  return (
    <>
      <section id="unggah-artikel" className="mb-5 py-5">
        <form
          onSubmit={handleSubmit(onSubmitArticle)}
          className="flex flex-col gap-6"
        >
          {/* Title */}
          <Flex justify="space-between" align="center">
            <h3 className="font-bold">Unggah Artikel</h3>
            <div>
              <Space size="middle">
                <Button
                  onClick={handleOpenModalCancel}
                  id="cancel-submit"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  Batal
                </Button>
                <Button
                  onSubmit={handleOpenModalSuccess}
                  id="submit-button"
                  type="primary"
                  htmlType="submit"
                >
                  Unggah
                </Button>
              </Space>
            </div>
          </Flex>

          <Col>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Flex
                vertical
                className="gap-6 rounded-lg border border-grey-50 p-6"
              >
                {/* Judul */}
                <Row>
                  <label
                    className="block text-xl font-semibold text-grey-400"
                    htmlFor=""
                  >
                    Judul
                  </label>
                  <input
                    {...register("title")}
                    className={`mt-2 block w-full rounded-lg border p-4 text-base focus:border-green-500 focus:outline-none ${
                      errors.title
                        ? "border-negative text-negative"
                        : "border-grey-100 text-grey-900"
                    }`}
                    type="text"
                    placeholder="Masukkan judul dari artikel disini"
                  />
                  <span className="pt-1 text-xs text-negative">
                    {errors.title?.message}
                  </span>
                </Row>

                {/* Tags */}
                <Row>
                  <label
                    className="block text-xl font-semibold text-grey-400"
                    htmlFor=""
                  >
                    Tags
                  </label>
                  {/* <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                      <Select
                        mode="tags"
                        bordered={false}
                        {...field}
                        className={`mt-2 block w-full rounded-lg border px-2 py-4 text-base focus:border-green-500 focus:outline-none ${
                          errors.tags
                            ? "border-negative text-negative"
                            : "border-grey-100 text-grey-900"
                        }`}
                        placeholder={
                          <span className="font-normal text-grey-200">
                            Masukkan tags yang berkaitan dengan artikel
                          </span>
                        }
                      />
                    )}
                  /> */}
                  <input
                    {...register("tags")}
                    className={`mt-2 block w-full rounded-lg border p-4 text-base focus:border-green-500 focus:outline-none ${
                      errors.tags
                        ? "border-negative text-negative"
                        : "border-grey-100 text-grey-900"
                    }`}
                    type="text"
                    placeholder="Masukkan tags yang berkaitan dengan artikel"
                  />
                  <span className="pt-1 text-xs text-negative">
                    {errors.tags?.message}
                  </span>
                </Row>

                {/* Referensi */}
                <Row>
                  <label
                    className="block text-xl font-semibold text-grey-400"
                    htmlFor=""
                  >
                    Referensi
                  </label>
                  <textarea
                    {...register("reference")}
                    className={`mt-2 block w-full rounded-lg border p-4 text-base focus:border-green-500 focus:outline-none ${
                      errors.reference
                        ? "border-negative text-negative"
                        : "border-grey-100 text-grey-900"
                    }`}
                    rows={3}
                    placeholder="Masukkan referensi penulisan artikel"
                  ></textarea>
                  <span className="pt-1 text-xs text-negative">
                    {errors.reference?.message}
                  </span>
                </Row>
              </Flex>
              <Flex
                vertical
                className="gap-6 rounded-lg border border-grey-50 p-6"
              >
                {/* Gambar */}
                <div>
                  <label
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-lg lg:h-[260px] lg:w-[390px] ${
                      imagePreview
                        ? ""
                        : errors.image
                        ? "border-2 border-dashed border-negative"
                        : "border-2 border-dashed border-green-500"
                    }`}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="rounded-lg lg:h-[260px] lg:w-[390px]"
                      />
                    ) : (
                      <div className="mx-auto flex flex-col items-center justify-center gap-4 pb-6 pt-5">
                        <IoImageOutline size={100} color="#989898" />
                        <div className="flex flex-col gap-1">
                          <div className="mx-auto flex gap-2 text-green-500">
                            <MdOutlineFileUpload size={20} />
                            <p className="text-sm font-bold">Pilih Gambar</p>
                          </div>
                          <p className="text-xs text-grey-200">
                            Format File: JPG dan PNG
                          </p>
                        </div>
                      </div>
                    )}
                    <input
                      {...register("image")}
                      type="file"
                      className="hidden"
                      accept=".jpg, .png"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setImagePreview(URL.createObjectURL(file));
                        setValue("image", file);
                      }}
                    />
                  </label>
                  <div className="flex flex-col pt-2">
                    <p className="text-sm text-grey-200">
                      Maksimum ukuran file: 20MB
                    </p>
                    <span className="pt-1 text-xs text-negative">
                      {errors.image?.message}
                    </span>
                  </div>
                </div>

                {/* Deskripsi Gambar */}
                <Row>
                  <label
                    className="block text-xl font-semibold text-grey-400"
                    htmlFor=""
                  >
                    Deskripsi Gambar
                  </label>
                  <input
                    {...register("image_desc")}
                    className={`mt-2 block w-full rounded-lg border p-4 text-base focus:border-green-500 focus:outline-none ${
                      errors.desc
                        ? "border-negative text-negative"
                        : "border-grey-100 text-grey-900"
                    }`}
                    type="text"
                    placeholder="Masukkan deskripsi gambar disini"
                  />
                  <span className="pt-1 text-xs text-negative">
                    {errors.desc?.message}
                  </span>
                </Row>
              </Flex>
            </div>
          </Col>

          <Col>
            <Flex
              vertical
              className="gap-6 rounded-lg border border-grey-50 p-6"
            >
              {/* Isi Artikel */}
              <div>
                <label
                  className="block text-xl font-semibold text-grey-400"
                  htmlFor=""
                >
                  Isi Artikel
                </label>
                <Controller
                  name="content"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <ReactQuill
                      modules={module}
                      className="mt-2"
                      {...field}
                      theme="snow"
                      placeholder="Tuliskan deskripsi terkait artikel"
                    />
                  )}
                />
                <span className="pt-1 text-xs text-negative">
                  {errors.content?.message}
                </span>
              </div>
            </Flex>
          </Col>
        </form>
        {isShowCancel && (
          <ModalCancelArticle closeModal={handleOpenModalCancel} />
        )}
        {isShowSuccess && (
          <ModalSuccessArticle closeModal={handleOpenModalSuccess} />
        )}
      </section>
    </>
  );
};

export default UploadArticle;
