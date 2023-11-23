import { Navigate, Outlet } from "react-router-dom";
import { authService } from "@/configs/Auth";

export default function ProtectedRoute() {
  if (!authService.isAuthorized()) return <Outlet />;
  return <Navigate to="/dashboard" />;
}
