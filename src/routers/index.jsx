import { Routes, Route } from "react-router-dom";
import Faq from "@/views/app-views/landing-page/misc/Faq";
import LandingPage from "@/views/app-views/landing-page";
import UserTerms from "@/views/app-views/landing-page/misc/UserTerms";
import PublicRoute from "@/routers/PublicRoute";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute/>}>
      <Route index element={<LandingPage />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/userterms" element={<UserTerms />} />
      </Route>
    </Routes>
  );
}
