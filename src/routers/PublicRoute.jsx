import React, { useSyncExternalStore } from "react";
import { LandingPageLayout } from "@/components/layout-components/LandingPageLayout";
import { Outlet } from "react-router-dom";
import Timeout from "@/views/error-views/Timeout";

export default function PublicRoute() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

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
function getSnapshot() {
  return navigator.onLine;
}
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
