import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import { Row, Col, Card, Tag, Avatar, Flex, Image, Pagination } from "antd";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { ListArticles } from "../constant/list-article";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

import { useEffect, useState } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { useDebounce } from "@/hooks/useDebounce";
import { useSelector } from "react-redux";
import { selectDoctorProfile } from "@/store/get-doctor-profile-slice";

export default function ListArticle() {
  const [isError, setIsError] = useState(null);
  const [dataArticles, setDataArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 500);

  const doctor = useSelector(selectDoctorProfile);
  const dataDoctor = doctor?.data?.response;

  useDocumentTitle("Artikel Saya");
  useScrollToTop();

  useEffect(() => {
    const fetchListArticles = async () => {
      try {
        const result = await APIArticle.getListArticle();
        if (searchQuery) {
          const filteredData = result.response?.filter((data) => {
            const filterBy =
              data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              data.tags.toLowerCase().includes(searchQuery.toLowerCase());

            return filterBy;
          });

          setDataArticles(filteredData);
        } else {
          setDataArticles(result?.response);
        }
      } catch (error) {
        console.log(error);
        setIsError(error);
      }
    };
    fetchListArticles();
  }, [searchQuery]);

  console.log(searchValue);

  return (
    <>
      <section>
        <div className="relative mb-6 focus:bg-black">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 sm:ps-8">
            <BsSearch className="text-gray-400" />
          </div>
          <input
            id="search-article"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm focus:outline-green-500 sm:p-5 sm:ps-14"
            placeholder="Cari kata kunci"
            // name="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
      </section>

      <section id="list-article">
        <Row gutter={[16, 24]}>
          {dataArticles?.map((item, i) => (
            <Col key={i} span={8} xs={24} md={12} lg={8}>
              <Link to={`/artikel/${item.id}`}>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={item?.image_desc}
                      src={item?.image}
                      // // height={`100%`}
                      className="h-[200px] md:h-[190px] lg:h-[200px] xl:h-[250px]"
                      preview={false}
                      fallback={ListArticles[0].img}
                    />
                  }
                >
                  <Tag className="rounded-lg border-none bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                    {item?.tags.charAt(0).toUpperCase() + item?.tags.slice(1)}
                  </Tag>
                  <p className="mb-5 mt-3 line-clamp-1 font-semibold">
                    {item?.title}
                  </p>

                  <Flex gap="middle">
                    <div className="self-center">
                      <Avatar src={dataDoctor?.profile_image} />
                    </div>
                    <div>
                      <h6 className="font-semibold">{dataDoctor?.name}</h6>
                      <h6 className="text-grey-200">
                        {dayjs(item?.date, "YYYY-MM-DD").format("DD MMM YYYY")}
                      </h6>
                    </div>
                  </Flex>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Col>
          <Pagination
            defaultCurrent={1}
            total={50}
            className="mx-auto my-10 flex justify-center md:gap-5"
            // onChange={onChange}
          />
        </Col>
        {isError && (
          <Flex className="mb-5 flex-col items-center justify-center text-red-500">
            <p>{isError.message}</p>
          </Flex>
        )}
      </section>
    </>
  );
}
