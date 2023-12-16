import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Layout id="app-layout" className="bg-white">
      <div className="bg-error-timeout"></div>
      <Topbar />
      <main className="flex">
        <Sidebar />
        <Content />
      </main>
    </Layout>
  );
}

function Content() {
  return (
    <section id="content-app" className="w-full overflow-x-hidden px-5">
      <Outlet />
    </section>
  );
}
