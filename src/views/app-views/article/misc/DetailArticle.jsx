import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("id");

import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Image,
  Tag,
  List,
  Flex,
  Space,
  Skeleton,
} from "antd";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegBookmark, FaTrashAlt } from "react-icons/fa";
import { MdOutlineComment, MdOutlineRemoveRedEye } from "react-icons/md";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

import { APIArticle } from "@/apis/APIArticle";
import { splitString } from "@/utils/SplitString";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { selectDoctorProfile } from "@/store/get-doctor-profile-slice";
import { ModalDeleteArticle } from "@/components/shared-components/ModalDeleteArticle";

export default function DetailArticle() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [detailArticles, setDetailArticles] = useState([]);
  const { articleId } = useParams();
  const [isShowDelete, setIsShowDelete] = useState(false);

  useDocumentTitle("Artikel");
  useScrollToTop();

  const doctor = useSelector(selectDoctorProfile);
  const dataDoctor = doctor?.data?.response;
  const tags = splitString(detailArticles?.tags);

  const handleOpenModalDelete = () => {
    setIsShowDelete((prev) => !prev);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchDetailArticles = async () => {
      try {
        const result = await APIArticle.getDetailArticle(articleId);
        setDetailArticles(result?.response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(error);
        setIsLoading(false);
      }
    };
    fetchDetailArticles();
  }, [articleId]);

  return (
    <section id="detail-article" className="py-5">
      <Flex justify="space-between" className="mb-6">
        <Link to="/artikel-saya">
          <Button
            id="button-back"
            icon={<IoArrowBackOutline className="text-[20px] md:text-[24px]" />}
            className="flex w-[100px] justify-center border-transparent bg-transparent text-center text-sm font-semibold text-[#4B4B4B] shadow-none hover:text-green-500 md:text-base"
          >
            Kembali
          </Button>
        </Link>
        <Flex justify="space-around" align="center">
          <section>
            <Space size="middle">
              <Button
                onClick={handleOpenModalDelete}
                id="remove-article"
                className="flex border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <span className="me-2 text-lg">
                  <FaTrashAlt />
                </span>
                Hapus
              </Button>
            </Space>
          </section>
        </Flex>
      </Flex>
      <Card>
        <>
          {isLoading ? (
            <>
              <Skeleton.Input
                active
                className="mb-3 mt-5 block h-[15px] w-[350px] sm:w-[500px]"
              />
              <Space>
                <List>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Skeleton.Avatar active size={60} shape="circle" />
                      }
                      title={
                        <Skeleton.Input
                          active
                          size="small"
                          className="h-[15px] w-[200px] sm:w-[300px]"
                        />
                      }
                      description={
                        <Skeleton.Input
                          active
                          size="small"
                          className="h-[15px] w-[200px] sm:w-[300px]"
                        />
                      }
                    />
                  </List.Item>
                </List>
              </Space>
              <Skeleton.Input
                active
                className="mb-3 mt-5 block h-[15px] w-[100px] sm:w-[200px]"
              />
            </>
          ) : (
            <>
              <section className="mb-3 mt-5">
                <h2 className="sm:text-md text-start text-base font-semibold text-[#0D0D0D] md:text-lg lg:text-xl xl:text-3xl">
                  {detailArticles?.title}
                </h2>
              </section>

              <List itemLayout="horizontal">
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={60}
                        icon={<UserOutlined />}
                        src={dataDoctor?.profile_image}
                      />
                    }
                    title={
                      <h5 className="text-sm font-semibold text-grey-500 sm:text-base">
                        Oleh {dataDoctor?.name}
                      </h5>
                    }
                    description={
                      <p className="text-xs text-grey-400 sm:text-sm">
                        Diunggah pada{" "}
                        {dayjs(
                          detailArticles?.date,
                          "YYYY-MM-DDTHH:mm:ssZ",
                        ).format(`DD MMMM YYYY [pukul] HH:mm [WIB]`)}
                      </p>
                    }
                  />
                </List.Item>
              </List>

              <section className="mt-2">
                <div className="inline-flex h-10 w-[73px]  items-start justify-start gap-2.5 rounded-[10px] p-2">
                  <div className="inline-flex items-center justify-start gap-2">
                    <MdOutlineRemoveRedEye className="relative h-5 w-5 text-[#989898]" />
                    <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                      {detailArticles?.views || 0}
                    </p>
                  </div>

                  <div className="inline-flex items-center justify-start gap-2.5">
                    <FaRegBookmark className="relative h-5 w-5 text-[#989898]" />
                    <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                      {detailArticles?.bookmarks || 0}
                    </p>
                  </div>

                  <div className="inline-flex items-center justify-start gap-2.5">
                    <MdOutlineComment className="relative h-5 w-5 text-[#989898]" />
                    <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                      {detailArticles?.comments?.length || 0}
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {isLoading ? (
            <>
              <Skeleton.Image
                active
                className="h-[250px] w-full sm:h-[300px] md:h-[380px] md:w-3/4 lg:h-[403px] xl:h-[433px]"
              />
            </>
          ) : (
            <Image
              id="image-article"
              className="h-[250px] sm:h-[300px] md:h-[380px] lg:h-[403px] xl:h-[433px]"
              src={detailArticles?.image}
              alt={detailArticles?.image_desc}
              preview={true}
            />
          )}

          <section id="tags">
            <h4 className="my-4 text-base text-[#4B4B4B] sm:text-xl">Tags</h4>
            {tags &&
              tags?.map((tag, index) => (
                <Tag
                  key={index}
                  className="mb-2 me-2 text-justify text-xs font-semibold capitalize text-[#4B4B4B] hover:bg-green-100 sm:text-sm md:text-base"
                  rootClassName="h-7 sm:h-10 px-5 py-2.5 rounded-lg border-[#4B4B4B] justify-center items-center inline-flex"
                >
                  {tag}
                </Tag>
              ))}
          </section>

          <section
            id="content-article"
            className="menu my-5 w-full text-justify"
          >
            {parse(`${detailArticles?.content}`)}

            <div className="mt-5">
              <h5 className="mb-2 text-xs font-semibold text-[#151515] sm:text-base">
                Referensi
              </h5>
              <p className="text-start text-[10px] font-[300] italic text-[#151515] sm:text-sm">
                {detailArticles?.reference}
              </p>
            </div>
          </section>

          <section id="comment-section">
            <div className="mt-8 h-14 w-full bg-[#E9E9E9] p-4 sm:mt-14">
              <h3 className="text-base font-semibold text-[#4B4B4B] sm:text-xl">
                Komentar ({detailArticles?.comments?.length || 0})
              </h3>
            </div>

            <Skeleton loading={isLoading} active avatar>
              <List itemLayout="horizontal" className="p-4">
                {detailArticles?.comments?.map((item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size={50}
                          icon={<UserOutlined />}
                          src={
                            item.patient_profile ??
                            "https://res.cloudinary.com/ddgoyuips/image/upload/c_crop,g_auto,h_800,w_800/cld-sample.jpg"
                          }
                        />
                      }
                      title={
                        <h5 className="text-sm font-semibold text-grey-500 sm:text-base">
                          Oleh {item.patient_name ?? "Anonymous"}
                        </h5>
                      }
                      description={
                        <p className="mb-5 text-xs text-grey-300 sm:text-sm">
                          {dayjs(item.date).fromNow()}
                        </p>
                      }
                    />
                    {item.comment}
                  </List.Item>
                ))}
              </List>
            </Skeleton>
          </section>
        </>
      </Card>
      {isError && (
        <Flex className="mb-5 flex-col items-center justify-center text-red-500">
          <p>{isError.message}</p>
        </Flex>
      )}
      {isShowDelete && (
        <ModalDeleteArticle
          closeModal={handleOpenModalDelete}
          detailArticles={detailArticles}
        />
      )}
    </section>
  );
}
