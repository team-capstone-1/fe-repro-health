import { Row, Col, Layout } from "antd";

import Topbar from "@/components/layout-components/Topbar";
import Sidebar from "./components/Sidebar";
import ButtonFilter from "./components/ButtonFilter";
import TotalCards from "./components/TotalCards";
import AppointmentTable from "./components/AppointmentTable";

export default function Dashboard() {
  return (
    <>
      <Layout className="lg:h-screen">
        <Topbar />
        <main className="flex">
          <Sidebar />
          <div className="px-5">
            <ButtonFilter />
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
