import { ScheduleCalendar } from "./components/ScheduleCalendar";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function MySchedule() {
  useDocumentTitle("Jadwal Saya");
  useScrollToTop();
  return (
    <>
      <ScheduleCalendar />
    </>
  );
}
