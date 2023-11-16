import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo-white.png";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="base-container bg-green-900 py-[2rem] text-white"
      >
        <Row gutter={[16, 24]}>
          <Col
            id="social-menu-footer"
            className="gutter-row"
            span={8}
            xs={24}
            md={8}
            lg={7}
          >
            <div>
              <Link id="logo-footer" to="/">
                <img src={Logo} alt="" />
              </Link>
              <p id="social-media" className="my-3 pt-5 font-semibold">
                Social Media
              </p>
              <div id="social-media-wrapper" className="flex gap-3">
                <div id="facebook-icon" className="icon-footer">
                  <FaFacebookF className="text-lg" />
                </div>
                <div id="twitter-icon" className="icon-footer">
                  <FaTwitter className="text-md" />
                </div>
                <div id="instagram-icon" className="icon-footer">
                  <AiFillInstagram className="text-lg" />
                </div>
                <div id="youtube-icon" className="icon-footer">
                  <FaYoutube className="text-lg" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            id="menu-footer"
            className="gutter-row"
            span={4}
            xs={12}
            md={4}
            lg={4}
          >
            <div id="menu-wrapper" className="list-none align-middle">
              <p id="menu-footer-title" className="mb-1 font-semibold">
                Menu
              </p>
              <Link to="/" id="link-to-home">
                <p className="mb-1 cursor-pointer hover:text-green-100">Home</p>
              </Link>
              <a href="/#about" id="link-to-about">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  About Us
                </p>
              </a>
              <a href="/#services" id="link-to-service">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Service
                </p>
              </a>
              <a href="/#benefit" id="link-to-benefit">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Benefit
                </p>
              </a>
            </div>
          </Col>
          <Col
            id="other-menu-footer"
            className="gutter-row"
            span={4}
            xs={12}
            md={6}
            lg={5}
          >
            <div id="other-menu-wrapper" className="list-none">
              <p id="other-menu-footer-title" className="mb-1 font-semibold">
                Lainnya
              </p>
              <Link to="/ketentuan-pengguna" id="link-to-ketentuan">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Ketentuan Pengguna
                </p>
              </Link>
              <Link to="/kebijakan-privasi" id="link-to-kebijakan">
                <p className="mb-1 cursor-pointer hover:text-green-100">
                  Kebijakan Privasi
                </p>
              </Link>
              <Link to="/faq" id="link-to-faq">
                <p className="cursor-pointer hover:text-green-100">FAQ</p>
              </Link>
            </div>
          </Col>
          <Col
            id="address-footer"
            className="gutter-row"
            span={8}
            xs={24}
            md={6}
            lg={8}
          >
            <div>
              <p id="name-office" className="font-semibold">
                PT Jalan Mundur
              </p>
              <p id="address">
                Jl. Raya Tidar No.23, Karangbesuki, Kec. Sukun, Kota Malang,
                Jawa Timur 65146.
              </p>
              <p id="contact-section" className="mt-5 font-semibold">
                Contact
              </p>
              <p id="email-contact-footer">Email : 0823 2883 2011</p>
              <p id="phone-contact-footer">Phone Number: 0821 3358 1616</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
