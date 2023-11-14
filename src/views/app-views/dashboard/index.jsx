import { Row, Col, Layout } from "antd";

import Topbar from "@/components/layout-components/Topbar";
import TotalCards from "./components/TotalCards";
import AppointmentTable from "./components/AppointmentTable";
import Sidebar from "./components/Sidebar";

export default function index() {
  return (
    <>
      <Layout className="lg:h-screen">
        <Topbar />
        <main className="flex">
          <Sidebar />
          <div className="px-12">
            <Row gutter={[8, 16]}>
              <Col span={24}>
                <TotalCards />
              </Col>
              <Col span={24}>
                <AppointmentTable />
              </Col>
            </Row>
          </div>
        </main>
      </Layout>
    </>
  );
}
