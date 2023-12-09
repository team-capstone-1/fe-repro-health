import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import distanceInWordsStrict from "date-fns/formatDistanceStrict";
import id from "date-fns/locale/id";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Row,
  Col,
  Card,
  Tag,
  Avatar,
  Flex,
  Image,
  Pagination,
  Empty,
  ConfigProvider,
  Spin,
} from "antd";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import { ListArticles } from "../constant/list-article";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

import splitString from "@/utils/SplitString";
import { APIArticle } from "@/apis/APIArticle";
import { useDebounce } from "@/hooks/useDebounce";
import { selectDoctorProfile } from "@/store/get-doctor-profile-slice";

export default function ListArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataArticles, setDataArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 500);

  const doctor = useSelector(selectDoctorProfile);
  const dataDoctor = doctor?.data?.response;

  useDocumentTitle("Artikel Saya");
  useScrollToTop();

  useEffect(() => {
    setIsLoading(true);
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

          !filteredData ? setDataArticles([]) : setDataArticles(filteredData);
        } else {
          setDataArticles(result?.response);
        }
        setIsLoading(false);
        result !== null &&
          result.response.forEach((data) => {
            data.date = distanceInWordsStrict(new Date(data.date), new Date(), {
              locale: id,
              addSuffix: true,
            });
          });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(error);
      }
    };
    fetchListArticles();
  }, [searchQuery]);

  return (
    <>
      <section>
        <div className="relative mb-6 focus:bg-black">
          {!isLoading ? (
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 sm:ps-8">
              <BsSearch className="text-gray-400" />
            </div>
          ) : (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#17c6a3",
                },
              }}
            >
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 sm:ps-8">
                <Spin />
              </div>
            </ConfigProvider>
          )}
          <input
            id="search-article"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm focus:outline-green-500 sm:p-5 sm:ps-14"
            placeholder="Cari kata kunci"
            name="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
      </section>

      <section id="list-article">
        {searchQuery && !isLoading && dataArticles.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        <Row gutter={[16, 24]}>
          {dataArticles?.map((item, i) => (
            <Col key={i} span={8} xs={24} md={12} lg={8}>
              <Link to={`/artikel/${item.id}`}>
                <Card
                  loading={isLoading}
                  hoverable
                  cover={
                    <>
                      <Image
                        alt={item?.image_desc}
                        src={item?.image}
                        className="h-[200px] md:h-[190px] lg:h-[200px] xl:h-[250px]"
                        preview={false}
                        fallback={ListArticles[0].img}
                      />
                    </>
                  }
                >
                  <Tags tags={item.tags} />

                  <p className="mb-5 mt-3 line-clamp-1 font-semibold">
                    {item?.title}
                  </p>

                  <Flex gap="middle">
                    <div className="self-center">
                      <Avatar src={dataDoctor?.profile_image} />
                    </div>
                    <div>
                      <h6 className="font-semibold">{dataDoctor?.name}</h6>
                      <h6 className="text-grey-200">{item.date}</h6>
                    </div>
                  </Flex>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {isError.message !== null && !isLoading && isError ? (
          <Flex className="mb-5 flex-col items-center justify-center text-red-500">
            <p>{isError.message}</p>
          </Flex>
        ) : (
          <></>
        )}
      </section>

      <footer>
        {dataArticles.length === 0 ? null : (
          <Col>
            <Pagination
              defaultCurrent={1}
              total={50}
              className="mx-auto my-10 flex justify-center md:gap-5"
            />
          </Col>
        )}
      </footer>
    </>
  );
}

const Tags = ({ tags }) => {
  const tagsList = splitString(tags);
  return (
    <>
      {tagsList?.map((tag, index) => (
        <Tag
          key={index}
          className="rounded-lg border-none bg-green-100 px-3 py-1 text-sm font-medium capitalize text-green-600"
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};
