import { Routes, Route } from "react-router-dom";
import PublicRoute from "@/routers/PublicRoute";

import LandingPage from "@/views/landing-views";
import Doctor from "@/views/landing-views/misc/DoctorPage";
import UserTerms from "@/views/landing-views/misc/UserTerms";
import PrivacyPolicy from "@/views/landing-views/misc/PrivacyPolicy";
import Faq from "@/views/landing-views/misc/Faq";

import Login from "@/views/auth-views/Login";
import ForgotPassword from "@/views/auth-views/ForgotPassword";
import Verify from "@/views/auth-views/Verify";
import ResetPassword from "@/views/auth-views/ResetPassword";

import Dashboard from "@/views/app-views/dashboard";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<LandingPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ketentuan-pengguna" element={<UserTerms />} />
        <Route path="/join-as-doctor" element={<Doctor />} />
        <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
