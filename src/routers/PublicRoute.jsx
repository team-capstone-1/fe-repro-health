import { Outlet } from "react-router-dom";

import Timeout from "@/views/error-views/Timeout";
import { LandingPageLayout } from "@/components/layout-components/LandingPageLayout";
import { useNavigatorOnline } from "@/hooks/useNavigatorOnline";

export default function PublicRoute() {
  const isOnline = useNavigatorOnline();

  if (isOnline) {
    return (
      <LandingPageLayout>
        <Outlet />
      </LandingPageLayout>
    );
  } else {
    return <Timeout />;
  }
}
