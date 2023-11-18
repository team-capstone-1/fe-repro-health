import { Routes, Route } from "react-router-dom";

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
// import DoctorProfile from "@/views/app-views/dashboard/profile/DoctorProfile";
import Forum from "@/views/app-views/forum";
import DiscussionDetail from "@/views/app-views/forum/misc/DiscussionDetail";
import Profile from "@/views/app-views/profile";
import PrivateRoute from "@/routers/PrivateRoute";
import PublicRoute from "@/routers/PublicRoute";

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
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:questionId" element={<DiscussionDetail />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profil" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
