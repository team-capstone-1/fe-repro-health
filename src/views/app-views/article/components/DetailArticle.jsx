import { Avatar, Button, Card, Space, Image } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DetailArticle as detailArticle } from "../constant/detail-article";

import { MdOutlineComment, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

export default function DetailArticle() {
  return (
    <section id="detail-article" className="mb-5 py-5">
      <Card>
        <Link to="/artikel">
          <Button
            icon={<IoArrowBackOutline className="text-[24px]" />}
            className="flex w-[100px] justify-center border-transparent bg-transparent text-center text-base font-semibold text-[#4B4B4B] shadow-none"
          >
            Kembali
          </Button>
        </Link>

        {detailArticle.map((val) => (
          <>
            <div className="mb-3 mt-5">
              <h3 className="text-[#0D0D0D]">{val.title}</h3>
            </div>

            <div>
              <Space wrap size={24}>
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  src={val.profile_doctor}
                />
                <div className="inline-flex h-[58px] w-[591px] flex-col items-start justify-center gap-1">
                  <h4 className="font-['Poppins'] text-xl font-medium text-[#1E1E1E]">
                    Oleh {val.doctor_name}
                  </h4>

                  <div className="flex flex-col items-start justify-start">
                    <p className="h-6 w-[591px] text-justify font-['Poppins'] text-base font-normal text-[#686868]">
                      Diunggah pada {val.upload_date}
                    </p>
                  </div>
                </div>
              </Space>

              <div className="mt-2">
                <div className="inline-flex h-10 w-[73px] flex-col items-start justify-start gap-2.5 rounded-[10px] p-2">
                  <div className="inline-flex items-center justify-start gap-2">
                    <MdOutlineRemoveRedEye className="relative h-5 w-5 text-[#989898]" />
                    <p className="font-['Poppins'] text-base font-medium text-[#989898]">
                      {val.views_amount}
                    </p>
                  </div>
                </div>

                <div className="inline-flex h-10 w-[73px] flex-col items-start justify-start gap-2.5 rounded-[10px] p-2">
                  <div className="inline-flex items-center justify-start gap-2">
                    <FaRegBookmark className="relative h-5 w-5 text-[#989898]" />
                    <p className="font-['Poppins'] text-base font-medium text-[#989898]">
                      {val.saved_amount}
                    </p>
                  </div>
                </div>

                <div className="inline-flex h-10 w-[73px] items-start justify-start gap-2 rounded-[10px] p-2">
                  <MdOutlineComment className="relative h-5 w-5 text-[#989898]" />
                  <div className="flex items-end justify-start gap-[21px]">
                    <p className="font-['Poppins'] text-base font-medium text-[#989898]">
                      {val.comment_amount}
                    </p>
                  </div>
                </div>
              </div>

              <Image
                className="h-[250px] sm:h-[300px] md:h-[380px] lg:h-[403px] xl:h-[433px]"
                src={val.image_article}
              />
            </div>
          </>
        ))}
      </Card>
    </section>
  );
}
