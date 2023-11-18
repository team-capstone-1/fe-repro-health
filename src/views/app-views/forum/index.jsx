import { Tabs } from "@/components/shared-components/Tabs";
import BelumDijawab from "./components/BelumDiJawab";
import SemuaDiskusi from "./components/SemuaDiskusi";

export default function Forum() {
  return (
    <>
      <Tabs title={["Semua Diskusi", "Belum Dijawab"]}>
        <SemuaDiskusi />
        <BelumDijawab />
      </Tabs>
    </>
  );
}