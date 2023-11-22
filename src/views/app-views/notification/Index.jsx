// YourOtherFile.js
import { useState } from "react";
import { Tabs } from "../../../components/shared-components/Tabs";

import AllNotification from "./components/AllNotification";
import UnRead from "./components/UnRead";

function Notification() {
  const [jumlahBelum, setJumlahBelum] = useState("");
  const [jumlahSudah, setJumlahSudah] = useState("");

  const jumlahBelumSekarang = (berapa) => {
    setJumlahBelum(berapa);
  };
  const jumlahSemuaSekarang = (berapa) => {
    setJumlahSudah(berapa);
  };
  return (
    <div>
      <Tabs title={[`Semua(${jumlahSudah})`, `Belum dibaca(${jumlahBelum})`]}>
        <div>
          <AllNotification dataSudah={jumlahSemuaSekarang} />
        </div>
        <div>
          <UnRead dataBelum={jumlahBelumSekarang} />
        </div>
      </Tabs>
    </div>
  );
}

export default Notification;
