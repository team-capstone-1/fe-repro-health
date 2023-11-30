import { Tabs } from "@/components/shared-components/Tabs";
import NotAnsweredYet from "./components/NotAnsweredYet";
import AllDiscussion from "./components/AllDiscussion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Forum() {
  useDocumentTitle("Forum");
  return (
    <>
      <Tabs title={["Semua Diskusi", "Belum Dijawab"]}>
        <AllDiscussion />
        <NotAnsweredYet />
      </Tabs>
    </>
  );
}
