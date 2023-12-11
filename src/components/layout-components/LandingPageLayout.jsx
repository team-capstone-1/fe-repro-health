import { Navbar } from "@/components/layout-components/Navbar";
import { Footer } from "@/components/layout-components/Footer";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <main id="content-landing-page">
      <div className="bg-error-timeout"></div>
      <Outlet />
    </main>
  );
}

export function LandingPageLayout() {
  return (
    <div id="landing-page-layout">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
