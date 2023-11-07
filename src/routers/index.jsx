import { Routes, Route } from "react-router-dom";
import FAQ from "../views/app-views/landing-page/misc/FAQ";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
