import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PublicRoute from "@/routers/PublicRoute";
import PrivateRoute from "@/routers/PrivateRoute";
import ProtectedRoute from "@/routers/ProtectedRoute";

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
import Forum from "@/views/app-views/forum";
import Article from "@/views/app-views/article";
import DetailArticle from "@/views/app-views/article/misc/DetailArticle";
import UploadArticle from "@/views/app-views/article/misc/UploadArticle";
import Notfound from "@/views/error-views/Notfound";
import Chatbot from "@/views/app-views/chatbot";
import DiscussionDetail from "@/views/app-views/forum/misc/DiscussionDetail";
import Profile from "@/views/app-views/profile";
import Appointment from "@/views/app-views/appointment";
import MySchedule from "@/views/app-views/my-schedule";
import Notifications from "@/views/app-views/notification";

import { globalRoute } from "@/utils/GlobalRoute";
import PrivateAndProtectedRoute from "./PrivateAndProtectedRoute";

export default function SetupRoutes() {
  const navigate = useNavigate();
  globalRoute.navigate = navigate;

  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<LandingPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ketentuan-pengguna" element={<UserTerms />} />
        <Route path="/bergabung-sebagai-dokter" element={<Doctor />} />
        <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/janji-temu" element={<Appointment />} />
        <Route path="/jadwal-saya" element={<MySchedule />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/artikel-saya" element={<Article />} />
        <Route path="/artikel/:articleId" element={<DetailArticle />} />
        <Route path="/unggah-artikel" element={<UploadArticle />} />
        <Route path="/asisten-dokter" element={<Chatbot />} />
        <Route path="/forum/:questionId" element={<DiscussionDetail />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/notifikasi" element={<Notifications />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/lupa-kata-sandi" element={<ForgotPassword />} />
        <Route path="/verifikasi/:userEmail" element={<Verify />} />
      </Route>
      <Route path="/" element={<PrivateAndProtectedRoute />}>
        <Route path="/atur-ulang-kata-sandi" element={<ResetPassword />} />
      </Route>
      <Route>
        <Route path="/404" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
