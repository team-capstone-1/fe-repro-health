import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo-white.png";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="base-container bg-green-900 py-[2rem] text-white">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={8} xs={24} md={8} lg={7}>
            <div>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              <p className="my-3 pt-5 font-semibold">Social Media</p>
              <div className="flex gap-3">
                <div className="icon-footer">
                  <FaFacebookF className="text-lg" />
                </div>
                <div className="icon-footer">
                  <FaTwitter className="text-md" />
                </div>
                <div className="icon-footer">
                  <AiFillInstagram className="text-lg" />
                </div>
                <div className="icon-footer">
                  <FaYoutube className="text-lg" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={4} xs={12} md={4} lg={4}>
            <div className="list-none align-middle">
              <p className="mb-1 font-semibold">Menu</p>
              <Link to="/">
                <p className="mb-1 cursor-pointer hover:text-green-100">Home</p>
              </Link>
              <a href="/#about">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  About Us
                </p>
              </a>
              <a href="/#services">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Service
                </p>
              </a>
              <a href="/#benefit">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Benefit
                </p>
              </a>
            </div>
          </Col>
          <Col className="gutter-row" span={4} xs={12} md={6} lg={5}>
            <div className="list-none">
              <p className="mb-1 font-semibold">Lainnya</p>
              <Link to="/ketentuan-pengguna">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Ketentuan Pengguna
                </p>
              </Link>
              <Link to="/kebijakan-privasi">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Kebijakan Privasi
                </p>
              </Link>
              <Link to="/faq">
                <p className="cursor-pointer hover:text-green-100">FAQ</p>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={8} xs={24} md={6} lg={8}>
            <div>
              <p className="font-semibold">PT Jalan Mundur</p>
              <p>
                Jl. Raya Tidar No.23, Karangbesuki, Kec. Sukun, Kota Malang,
                Jawa Timur 65146.
              </p>
              <p className="mt-5 font-semibold">Contact</p>
              <p>Email : 0823 2883 2011</p>
              <p>Phone Number: 0821 3358 1616</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}