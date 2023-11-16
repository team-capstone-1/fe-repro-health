import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Layout id="app-layout" className="bg-white">
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
    <section id="content-app" className="px-5 w-full">
      <Outlet />
    </section>
  );
}
