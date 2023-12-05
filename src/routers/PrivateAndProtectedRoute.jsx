import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsPasswordReset } from "@/store/is-password-reset-slice";
import { useNavigatorOnline } from "@/hooks/useNavigatorOnline";
import { authService } from "@/configs/Auth";
import Timeout from "@/views/error-views/Timeout";

export default function PrivateAndProtectedRoute() {
  const { isPasswordReset } = useSelector(selectIsPasswordReset);
  const isOnline = useNavigatorOnline();

  if (authService.isAuthorized() && isPasswordReset && isOnline) {
    return <Outlet />;
  }
  if (!isOnline) {
    return <Timeout />;
  }
  return <Navigate to="/dashboard" />;
}
