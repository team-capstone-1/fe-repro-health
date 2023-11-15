import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Layout className="lg:h-screen">
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
    <section className="bg-white px-5">
      <Outlet />
    </section>
  );
}
