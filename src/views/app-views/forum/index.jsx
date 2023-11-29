import { Tabs } from "@/components/shared-components/Tabs";
import NotAnsweredYet from "./components/NotAnsweredYet";
import AllDiscussion from "./components/AllDiscussion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Forum() {
  useDocumentTitle("Forum");
  useScrollToTop();
  return (
    <>
      <Tabs title={["Semua Diskusi", "Belum Dijawab"]}>
        <AllDiscussion />
        <NotAnsweredYet />
      </Tabs>
    </>
  );
}
