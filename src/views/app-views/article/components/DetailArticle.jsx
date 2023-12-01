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

import { APIArticle } from "@/apis/APIArticle";
import { useEffect, useState } from "react";

export default function DetailArticle() {
  const [isError, setIsError] = useState(null);
  const [detailArticles, setDetailArticles] = useState([]);
  const { articleId } = useParams();
  useDocumentTitle("Artikel");

  useEffect(() => {
    const fetchDetailArticles = async () => {
      try {
        const result = await APIArticle.getDetailArticle(articleId);
        setDetailArticles(result?.response);
      } catch (error) {
        console.log(error);
        setIsError(error);
      }
    };
    fetchDetailArticles();
  }, []);

  return (
    <section id="detail-article" className="mb-5 py-5">
      <Card>
        <Link to="/artikel-saya">
          <Button
            icon={<IoArrowBackOutline className="text-[24px]" />}
            className="flex w-[100px] justify-center border-transparent bg-transparent text-center text-base font-semibold text-[#4B4B4B] shadow-none hover:text-green-500"
          >
            Kembali
          </Button>
        </Link>

        {detailArticle.map((article) => (
          <>
            <div className="mb-3 mt-5">
              <h3 className="text-[#0D0D0D]">{article?.title}</h3>
            </div>

            <List itemLayout="horizontal">
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      size={60}
                      icon={<UserOutlined />}
                      src={article?.profile_doctor}
                    />
                  }
                  title={
                    <h5 className="font-semibold text-grey-500">
                      Oleh {article?.doctor_name}
                    </h5>
                  }
                  description={
                    <p className="text-sm text-grey-400">
                      Diunggah pada {article?.upload_date}
                    </p>
                  }
                />
              </List.Item>
            </List>

            <div className="mt-2">
              <div className="inline-flex h-10 w-[73px] flex-col items-start justify-start gap-2.5 rounded-[10px] p-2">
                <div className="inline-flex items-center justify-start gap-2">
                  <MdOutlineRemoveRedEye className="relative h-5 w-5 text-[#989898]" />
                  <p className=" text-base font-medium text-[#989898]">
                    {article?.views_amount}
                  </p>
                </div>
              </div>

              <div className="inline-flex h-10 w-[73px] flex-col items-start justify-start gap-2.5 rounded-[10px] p-2">
                <div className="inline-flex items-center justify-start gap-2">
                  <FaRegBookmark className="relative h-5 w-5 text-[#989898]" />
                  <p className=" text-base font-medium text-[#989898]">
                    {article?.bookmarks_amount}
                  </p>
                </div>
              </div>

              <div className="inline-flex h-10 w-[73px] items-start justify-start gap-2 rounded-[10px] p-2">
                <MdOutlineComment className="relative h-5 w-5 text-[#989898]" />
                <div className="flex items-end justify-start gap-[21px]">
                  <p className=" text-base font-medium text-[#989898]">
                    {commentUser?.length}
                  </p>
                </div>
              </div>
            </div>

            <Image
              id="image-article"
              className="h-[250px] sm:h-[300px] md:h-[380px] lg:h-[403px] xl:h-[433px]"
              src={article?.error_example}
              // preview={false}
              fallback={article.image_article}
            />

            <div id="tags">
              <h4 className="my-4 text-[#4B4B4B]">Tags</h4>
              {article?.tags.map((tag) => (
                <Tag
                  className="mb-2 me-2 text-justify text-xs font-semibold text-[#4B4B4B] hover:bg-green-100 sm:text-sm md:text-base"
                  rootClassName="h-7 sm:h-10 px-5 py-2.5 rounded-lg border-[#4B4B4B] justify-center items-center inline-flex"
                >
                  {tag}
                </Tag>
              ))}
            </div>

            <div id="content-article" className="my-5 w-full text-justify">
              <p className="text-base font-[400] text-[#151515]">
                {article?.content}
              </p>

              <div className="mb-4 mt-5">
                <h5 className="mb-2 text-sm font-semibold text-[#151515] sm:text-base">
                  Referensi
                </h5>
                {article?.reference.map((ref) => (
                  <p className="text-start text-[10px] font-[300] italic text-[#151515] sm:text-sm">
                    {ref}
                  </p>
                ))}
              </div>
            </div>

            <section id="comment-section">
              <div className="mt-14 h-14 w-full bg-[#E9E9E9] p-4">
                <h3 className=" text-xl font-semibold text-[#4B4B4B]">
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
                        <h5 className="font-semibold text-grey-500">
                          Oleh {comment.user_name}
                        </h5>
                      }
                      description={
                        <p className="mb-5 text-sm text-grey-300">
                          {comment.upload_date} yang lalu
                        </p>
                      }
                    />
                    {comment.user_comment}
                    <hr className="my-3" />
                  </List.Item>
                ))}
              </List>
            </section>
          </>
        ))}
      </Card>
      {isError && (
        <Flex className="mb-5 flex-col items-center justify-center text-red-500">
          <p>{isError.message}</p>
        </Flex>
      )}
    </section>
  );
}
