import { Navigate, Outlet, useLocation } from "react-router-dom";

import { authService } from "@/configs/Auth"
import { AppLayout } from "@/components/layout-components/AppLayout";

export default function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;

  let path = "/login";

  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`;
  }

  if (authService.isAuthorized()) {
    return (
      <AppLayout>
        <Outlet />
      </AppLayout>
    );
  }
  return <Navigate to={path} />;
}
