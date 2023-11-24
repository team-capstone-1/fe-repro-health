import { Flex, Col, Row } from "antd";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadArticle = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [value, setValue] = useState("");

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

  //   Handle Image Preview
  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const schema = yup.object().shape({
    title: yup.string().required("Judul harus diisi"),
    tags: yup.string().required("Tags harus diisi"),
    reference: yup.string().required("Referensi harus diisi"),
    desc: yup.string().required("Deskripsi gambar harus diisi"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitArticle = (data) => {
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
            <h3 className="font-semibold">Unggah Artikel</h3>
            <button id="submit-button" className="rounded-[10px] bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 lg:px-8 lg:py-3">
              Unggah
            </button>
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
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleImagePreview(e)}
                    />
                  </label>
                  <div className="flex flex-col pt-2">
                    <p className="text-sm text-grey-200">
                      Maksimum ukuran file: 20MB
                    </p>
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
                <ReactQuill
                  className="mt-2"
                  theme="snow"
                  modules={module}
                  value={value}
                  onChange={setValue}
                  placeholder="Tuliskan deskripsi terkait artikel"
                />
              </div>
            </Flex>
          </Col>
        </form>
      </section>
    </>
  );
};

export default UploadArticle;
