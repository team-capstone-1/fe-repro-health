import { Row, Col, Card, Skeleton, Flex } from "antd";
import { useEffect, useState } from "react";
import { APIDashboard } from "@/apis/APIDashboard";

import Icon01 from "@/assets/db-icon-01.png";
import Icon02 from "@/assets/db-icon-02.png";
import Icon03 from "@/assets/db-icon-03.png";
import Icon04 from "@/assets/db-icon-04.png";

export function TotalCards({ selectedFilter }) {
  const [data, setData] = useState({
    totalConsultations: 0,
    totalPatients: 0,
    totalTransactions: 0,
    totalArticles: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        let result;
        if (selectedFilter === "bulan") {
          result = await APIDashboard.getCountDataForOneMonth();
        } else if (selectedFilter === "minggu") {
          result = await APIDashboard.getCountDataForOneWeek();
        } else if (selectedFilter === "hari") {
          result = await APIDashboard.getCountDataForOneDay();
        }
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedFilter]);

  const formatPrice = (num) => {
    if (num >= 1000000) {
      return (num / 1000000) + " M";
    } else if (num >= 1000) {
      return (num / 1000) + " K";
    } else {
      return num;
    }
  };

  const formatPercentage = (percentage) => {
    return percentage !== undefined
      ? percentage < 0
        ? percentage + "%"
        : "+" + percentage + "%"
      : "0%";
  };

  const cardData = [
    {
      title: "Total Janji Temu",
      total: data.totalConsultations,
      icon: `${Icon01}`,
      percent: formatPercentage(data.consultationPercentage),
    },
    {
      title: "Total Pasien",
      total: data.totalPatients,
      icon: `${Icon02}`,
      percent: formatPercentage(data.patientPercentage),
    },
    {
      title: "Total Pendapatan",
      total: formatPrice(data.totalTransactions),
      icon: `${Icon03}`,
      percent: formatPercentage(data.transactionPercentage),
    },
    {
      title: "Total Artikel",
      total: data.totalArticles,
      icon: `${Icon04}`,
      percent: formatPercentage(data.articlePercentage),
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]}>
        {cardData.map((item, i) => (
          <Col key={i} span={6} xs={24} md={12} lg={12} xl={6}>
            <Card>
              <div className="grid h-32 content-between">
                <Flex justify="space-between" align="flex-start">
                  <div>
                    <p
                      id="total-card-title"
                      className="me-0 font-medium lg:me-3"
                    >
                      {item.title}
                    </p>
                    <Skeleton
                      loading={isLoading}
                      active
                      title={false}
                      paragraph={{ rows: 1 }}
                    >
                      <h4 id="total-item" className="font-bold">
                        {item.total}
                      </h4>
                    </Skeleton>
                  </div>
                  <div className="grid h-16 w-16 place-content-center rounded-lg bg-green-50">
                    <img id="item-icon" src={item.icon} alt="item-icon" />
                  </div>
                </Flex>
                <Skeleton
                  loading={isLoading}
                  active
                  title={false}
                  paragraph={{ rows: 1 }}
                >
                  <h6 id="total-card-percent" className="text-grey-200">
                    <span
                      className={`me-2 place-content-center rounded px-2 font-semibold ${
                        item.percent[0] === "+"
                          ? "bg-green-50 text-positive"
                          : item.percent[0] === "-"
                          ? "bg-red-50 text-negative"
                          : "bg-grey-50 text-grey-500"
                      }`}
                    >
                      {item.percent}
                    </span>
                    Sejak periode terakhir
                  </h6>
                </Skeleton>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
