import { Navigate, Outlet } from "react-router-dom";

import Timeout from "@/views/error-views/Timeout";
import { authService } from "@/configs/Auth";
import { useNavigatorOnline } from "@/hooks/useNavigatorOnline";

export default function ProtectedRoute() {
  const isOnline = useNavigatorOnline();

  if (!authService.isAuthorized() && isOnline) return <Outlet />;
  if (!isOnline) return <Timeout />;
  return <Navigate to="/dashboard" />;
}
