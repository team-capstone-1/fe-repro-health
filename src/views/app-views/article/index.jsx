import { Row, Col, Button } from "antd";
import { MdOutlineFileUpload } from "react-icons/md";

import ListArticle from "./components/ListArticle";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <div className="mb-5 py-5">
        <Row justify="space-between" className="mb-5" align="middle">
          <Col span={12}>
            <h3 className="font-bold">Artikel Saya</h3>
          </Col>
          <Col>
            <Link to="/unggah-artikel">
              <Button
                id="write-article"
                type="primary"
                className="flex bg-green-500"
              >
                Tulis Artikel
                <span className="ms-1 text-lg">
                  <MdOutlineFileUpload />
                </span>
              </Button>
            </Link>
          </Col>
        </Row>
        <ListArticle />
      </div>
    </>
  );
}
