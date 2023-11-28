import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Col, Row, Button, Space } from "antd";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadArticle = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [value, setValue] = useState("");
  const MAX_IMAGE_SIZE = 25000000;
  const ALLOWED_IMAGE_TYPE = ["image/jpg", "image/png"];

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
    ],
  };

  const schema = yup.object().shape({
    title: yup.string().required("Judul harus diisi"),
    tags: yup.string().required("Tags harus diisi"),
    reference: yup.string().required("Referensi harus diisi"),
    image: yup
      .mixed()
      .test("required", "Gambar harus diisi", (value) => {
        return value && value.length;
      })
      .test(
        "fileSize",
        "Ukuran file terlalu besar, maksimal 20 MB",
        (value) => {
          if (!value || !value[0]) return true;
          return value[0].size <= MAX_IMAGE_SIZE;
        },
      )
      .test(
        "fileType",
        "Format file tidak valid, hanya file gambar yang diperbolehkan",
        (value) => {
          if (!value || !value[0]) return true;
          return ALLOWED_IMAGE_TYPE.includes(value[0].type);
        },
      ),
    desc: yup.string().required("Deskripsi gambar harus diisi"),
    content: yup.string().required("Isi artikel harus diisi"),
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const convertImage = (file) => {
    const reader = new FileReader();
    reader.onloaded = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmitArticle = (data) => {
    if (Array.isArray(data.files) && data.files.length > 0) {
      convertImage(data.files[0]);
    }
    console.log(data);
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
                <Link to="/artikel">
                  <Button
                    id="cancel-submit"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    Batal
                  </Button>
                </Link>
                <Button id="submit-button" type="primary">
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
                        : errors.image ? "border-2 border-dashed border-negative" : "border-2 border-dashed border-green-500"
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
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      // onChange={(e) => handleImagePreview(e)}
                      accept=".jpg, .png"
                    />
                  </label>
                  <div className="flex flex-col pt-2">
                    <p className="text-sm text-grey-200">
                      Maksimum ukuran file: 20MB
                    </p>
                    {errors.image && (
                      <span className="pt-1 text-xs text-negative">
                        {errors.image.message}
                      </span>
                    )}
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
                    {...register("desc")}
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
                    <ReactQuill modules={module} className="mt-2" {...field} theme="snow" />
                  )}
                />
                <span className="pt-1 text-xs text-negative">
                  {errors.content?.message}
                </span>
              </div>
            </Flex>
          </Col>
        </form>
      </section>
    </>
  );
};

export default UploadArticle;
