import { Row, Col, Card, Tag, Avatar, Flex } from "antd";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const article = [
  {
    img: "https://i.ibb.co/YjmcJ0D/Rectangle-53.png",
    tag: "Reproduksi",
    title: "Pentingnya Menjaga Kesehatan Organ Reproduksi",
    ava: "https://i.ibb.co/Lvfgn2R/Profil.png",
    author: "Dr. Andi Cahaya",
    date: "18 Okt 2022",
  },
  {
    img: "https://i.ibb.co/YjmcJ0D/Rectangle-53.png",
    tag: "Reproduksi",
    title: "Pentingnya Menjaga Kesehatan Organ Reproduksi",
    ava: "https://i.ibb.co/Lvfgn2R/Profil.png",
    author: "Dr. Andi Cahaya",
    date: "18 Okt 2022",
  },
  {
    img: "https://i.ibb.co/YjmcJ0D/Rectangle-53.png",
    tag: "Reproduksi",
    title: "Pentingnya Menjaga Kesehatan Organ Reproduksi",
    ava: "https://i.ibb.co/Lvfgn2R/Profil.png",
    author: "Dr. Andi Cahaya",
    date: "18 Okt 2022",
  },
];

export default function ListArticle() {
  useDocumentTitle("Artikel Saya | ReproHealth");
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
          {article.map((item, i) => (
            <Col span={8} key={i}>
              <Link to="/detail-artikel">
                <Card hoverable cover={<img alt="thumbnail" src={item.img} />}>
                  <Tag className="rounded-lg border-none bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                    {item.tag}
                  </Tag>
                  <p className="my-3 pb-2 font-semibold">{item.title}</p>
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
