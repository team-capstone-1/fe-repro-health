import { LandingPageLayout } from "@/components/layout-components/LandingPageLayout";
import { Outlet } from "react-router-dom";

export default function PublicRoute() {
  return (
    <LandingPageLayout>
      <Outlet />
    </LandingPageLayout>
  );
}
