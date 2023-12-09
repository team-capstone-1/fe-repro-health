import { ListNotifications } from "./components/ListNotifications";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Notifications() {
  useDocumentTitle("Notifikasi");
  useScrollToTop();
  return (
    <section className="flex flex-col gap-4 py-7">
      <ListNotifications />
    </section>
  );
}
