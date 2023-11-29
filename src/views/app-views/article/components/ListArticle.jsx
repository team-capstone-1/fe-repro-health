import { Row, Col, Card, Tag, Avatar, Flex } from "antd";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { ListArticles } from "../constant/list-article";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function ListArticle() {
  useDocumentTitle("Artikel Saya");
  useScrollToTop();
  return (
    <>
      <section id="search-article">
        <div className="relative mb-6 focus:bg-black">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 sm:ps-8">
            <BsSearch className="text-gray-400" />
          </div>
          <input
            id="search-bar-forum-1"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm focus:outline-green-500 sm:p-5 sm:ps-14"
            placeholder="Cari kata kunci"
            name="search"
          />
        </div>
      </section>

      <section id="list-article">
        <Row gutter={[16, 24]}>
          {ListArticles.map((item, i) => (
            <Col key={i} span={8} xs={24} md={12} lg={8}>
              <Link to="/artikel">
                <Card hoverable cover={<img alt="thumbnail" src={item.img} />}>
                  <Tag className="rounded-lg border-none bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                    {item.tag}
                  </Tag>
                  <p className="mb-5 mt-3 line-clamp-2 font-semibold">
                    {item.title}
                  </p>
                  <Flex gap="middle">
                    <div className="self-center">
                      <Avatar src={item.ava} />
                    </div>
                    <div>
                      <h6 className="font-semibold">{item.author}</h6>
                      <h6 className="text-grey-200">{item.date}</h6>
                    </div>
                  </Flex>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}
