import React from "react";
import Navbar from "@/components/layout-components/Navbar";
import Footer from "@/components/layout-components/Footer";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
