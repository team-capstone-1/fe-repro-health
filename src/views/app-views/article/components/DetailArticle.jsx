import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("id");

import { Link, useParams } from "react-router-dom";
import { Avatar, Button, Card, Image, Tag, List } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineComment, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import {
  DetailArticle as detailArticle,
  CommentUser as commentUser,
} from "../constant/detail-article";

import Markdown from "react-markdown";
import { APIArticle } from "@/apis/APIArticle";
import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useSelector } from "react-redux";
import { selectDoctorProfile } from "@/store/get-doctor-profile-slice";

export default function DetailArticle() {
  const [isError, setIsError] = useState(null);
  const [detailArticles, setDetailArticles] = useState([]);
  const { articleId } = useParams();
  useDocumentTitle("Artikel");
  useScrollToTop();

  const doctor = useSelector(selectDoctorProfile);
  const dataDoctor = doctor?.data?.response;
  const tag = detailArticles?.tags;

  const fetchDetailArticles = async () => {
    try {
      const result = await APIArticle.getDetailArticle(articleId);

      setDetailArticles(result?.response);
    } catch (error) {
      console.log(error);
      setIsError(error);
    }
  };

  useEffect(() => {
    fetchDetailArticles();
  }, []);

  return (
    <section id="detail-article" className="mb-5 py-5">
      <Card>
        <Link to="/artikel-saya">
          <Button
            icon={<IoArrowBackOutline className="text-[20px] md:text-[24px]" />}
            className="flex w-[100px] justify-center border-transparent bg-transparent text-center text-sm font-semibold text-[#4B4B4B] shadow-none hover:text-green-500 md:text-base"
          >
            Kembali
          </Button>
        </Link>

        {/* {detailArticles?.map((article) => ( */}
        <>
          <div className="mb-3 mt-5">
            <h3 className="sm:text-md text-start text-base text-[#0D0D0D] md:text-lg lg:text-xl xl:text-2xl">
              {detailArticles?.title}
            </h3>
          </div>

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
                    {dayjs(detailArticles?.date, "YYYY-MM-DDTHH:mm:ssZ").format(
                      `DD MMMM YYYY [pukul] HH:mm [WIB]`,
                    )}
                  </p>
                }
              />
            </List.Item>
          </List>

          <div className="mt-2">
            <div className="inline-flex h-10 w-[73px]  items-start justify-start gap-2.5 rounded-[10px] p-2">
              <div className="inline-flex items-center justify-start gap-2">
                <MdOutlineRemoveRedEye className="relative h-5 w-5 text-[#989898]" />
                <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                  {detailArticles?.views}
                </p>
              </div>

              <div className="inline-flex items-center justify-start gap-2.5">
                <FaRegBookmark className="relative h-5 w-5 text-[#989898]" />
                <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                  {detailArticle[0].bookmarks_amount}
                </p>
              </div>

              <div className="inline-flex items-center justify-start gap-2.5">
                <MdOutlineComment className="relative h-5 w-5 text-[#989898]" />
                <p className="text-xs font-medium text-[#989898] sm:text-sm md:text-base">
                  {commentUser?.length}
                </p>
              </div>
            </div>
          </div>

          <Image
            id="image-article"
            className="h-[250px] sm:h-[300px] md:h-[380px] lg:h-[403px] xl:h-[433px]"
            src={detailArticles?.image}
            alt={detailArticles?.image_desc}
            preview={true}
            fallback={detailArticle[0].image_article}
          />

          <div id="tags">
            <h4 className="my-4 text-base text-[#4B4B4B] sm:text-xl">Tags</h4>
            <Tag
              className="mb-2 me-2 text-justify text-xs font-semibold text-[#4B4B4B] hover:bg-green-100 sm:text-sm md:text-base"
              rootClassName="h-7 sm:h-10 px-5 py-2.5 rounded-lg border-[#4B4B4B] justify-center items-center inline-flex"
            >
              {tag && tag.slice(0, 1).toUpperCase() + tag.slice(1)}
            </Tag>
            {/* {detailArticle[0].tags.map((tag) => (
              <Tag
                className="mb-2 me-2 text-justify text-xs font-semibold text-[#4B4B4B] hover:bg-green-100 sm:text-sm md:text-base"
                rootClassName="h-7 sm:h-10 px-5 py-2.5 rounded-lg border-[#4B4B4B] justify-center items-center inline-flex"
              >
                {tag}
              </Tag>
            ))} */}
          </div>

          <div id="content-article" className="my-5 w-full text-justify">
            <Markdown className="text-base font-[400] text-[#151515]">
              {detailArticles?.content}
            </Markdown>

            <div className="mt-5">
              <h5 className="mb-2 text-xs font-semibold text-[#151515] sm:text-base">
                Referensi
              </h5>
              {/* {detailArticle[0].reference.map((ref) => ( */}
              <p className="text-start text-[10px] font-[300] italic text-[#151515] sm:text-sm">
                {detailArticles?.reference}
              </p>
              {/* ))} */}
            </div>
          </div>

          {/* <div id="content-article" className="my-5 w-full text-justify">
            <p className="text-base font-[400] text-[#151515]">
              {detailArticles?.content}
            </p>

            <div className="mb-4 mt-5">
              <h5 className="mb-2 text-sm font-semibold text-[#151515] sm:text-base">
                Referensi
              </h5>
              {detailArticle[0].reference.map((ref) => (
                <p className="text-start text-[10px] font-[300] italic text-[#151515] sm:text-sm">
                  {ref}
                </p>
              ))}
            </div>
          </div> */}

          <section id="comment-section">
            <div className="mt-8 h-14 w-full bg-[#E9E9E9] p-4 sm:mt-14">
              <h3 className="text-base font-semibold text-[#4B4B4B] sm:text-xl">
                Komentar ({commentUser?.length})
              </h3>
            </div>

            <List itemLayout="horizontal" className="p-4">
              {commentUser?.map((comment) => (
                <List.Item key={comment.user_id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={50}
                        icon={<UserOutlined />}
                        src={comment.user_image}
                      />
                    }
                    title={
                      <h5 className="text-sm font-semibold text-grey-500 sm:text-base">
                        Oleh {comment.user_name}
                      </h5>
                    }
                    description={
                      <p className="mb-5 text-xs text-grey-300 sm:text-sm">
                        {dayjs(comment.upload_date).fromNow()}
                      </p>
                    }
                  />
                  {comment.user_comment}
                </List.Item>
              ))}
            </List>
          </section>
        </>
        {/* ))} */}
      </Card>
      {isError && (
        <Flex className="mb-5 flex-col items-center justify-center text-red-500">
          <p>{isError.message}</p>
        </Flex>
      )}
    </section>
  );
}
