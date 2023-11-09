import { Routes, Route } from "react-router-dom";
import Faq from "@/views/app-views/landing-page/misc/Faq";
import LandingPage from "@/views/app-views/landing-page";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}
