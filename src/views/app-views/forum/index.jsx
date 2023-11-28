import { Tabs } from "@/components/shared-components/Tabs";
import NotAnsweredYet from "./components/NotAnsweredYet";
import AllDiscussion from "./components/AllDiscussion";

export default function Forum() {
  return (
    <>
      <Tabs title={["Semua Diskusi", "Belum Dijawab"]}>
        <AllDiscussion />
        <NotAnsweredYet />
      </Tabs>
    </>
  );
}
