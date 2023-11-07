import { Routes, Route } from "react-router-dom";
import FAQ from "@/views/app-views/landing-page/misc/FAQ";
import LandingPage from "../views/app-views/landing-page";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
