import MySchedule from "./components/MySchedule";
import ListAppointment from "./components/ListAppointment";
import { Tabs } from "@/components/shared-components/Tabs";

export default function Appointment() {
  return (
    <>
      <Tabs title={["Janji Temu", "Jadwal Saya"]}>
        <section className="py-5">
          <ListAppointment />
        </section>
        <section className="py-5">
          <MySchedule />
        </section>
      </Tabs>
    </>
  );
}
