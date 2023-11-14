import React from "react";
import { AppLayout } from "@/components/layout-components/AppLayout";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
