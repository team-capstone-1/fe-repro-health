// YourOtherFile.js
import React, { useState } from "react";
import { Tabs } from '../../../components/shared-components/Tabs'
import BelumDibaca from "./components/BelumDibaca";
import Semua from "./components/Semua";

function Notification() {
    const [jumlahBelum, setJumlahBelum] = useState('')
    const [jumlahSudah, setJumlahSudah] = useState('')

    const jumlahBelumSekarang = (berapa) => {
        setJumlahBelum(berapa)
    }
    const jumlahSemuaSekarang = (berapa) => {
        setJumlahSudah(berapa)
    }
    return (
        <div>
            <Tabs title={[`Semua(${jumlahSudah})`, `Belum dibaca(${jumlahBelum})`]}>
                <div>
                    <Semua dataSudah={jumlahSemuaSekarang} />
                </div>
                <div>
                    <BelumDibaca dataBelum={jumlahBelumSekarang} />
                </div>
            </Tabs>
        </div>
    );
}

export default Notification;