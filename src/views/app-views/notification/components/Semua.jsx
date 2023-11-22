import React from 'react'
import { IoChatbubbles, IoTrash } from 'react-icons/io5'

const Semua = ({ dataSudah }) => {
    const all = [
        {
            judul: "Beberapa pertanyaan baru belum terjawab!",
            deskripsi: "Terdapat pertanyaan terbaru dari pasien yang belum terjawab",
            waktu: "20 menit yang lalu"
        },
        {
            judul: "2 janji temu baru pada tanggal 13 November!",
            deskripsi: "Terdapat 2 jadwal janji temu baru tanggal 13 November",
            waktu: "30 menit yang lalu"
        },
        {
            judul: "Artikel anda disimpan sebanyak 10 kali!",
            deskripsi: "Artikel anda telah disimpan sebanyak 10 kali",
            waktu: "13 November 2023"
        },
        {
            judul: "Pertanyaan dari Ananda Sofia belum terjawab!",
            deskripsi: "Terdapat pertanyaan terbaru dari Ananda Sofia yang belum terjawab",
            waktu: "12 November 2023"
        },
        {
            judul: "Pertanyaan dari Fikri Sofia belum terjawab!",
            deskripsi: "Terdapat pertanyaan terbaru dari Fikri Sofia yang belum terjawab",
            waktu: "12 November 2023"
        },
        {
            judul: "Konfirmasi pembayaran Supriyadi!",
            deskripsi: "Segera konfirmasi pembayaran Supriyadi",
            waktu: "12 November 2023"
        },
        {
            judul: "Konfirmasi pembayaran Karina Natya!",
            deskripsi: "Segera konfirmasi pembayaran Karina Natya",
            waktu: "11 November 2023"
        },
        {
            judul: "5 jadwal janji temu pada tanggal 11 November 2023!",
            deskripsi: "Terdapat 5 jadwal janji temu pada tanggal 11 November 2023",
            waktu: "11 November 2023"
        },
        {
            judul: "Artikel anda telah dikomen oleh 10 orang!",
            deskripsi: "Artikel anda telah dikomen sebanyak 10 kali oleh pengguna",
            waktu: "11 November 2023"
        }
    ]
    dataSudah(all.length)
    return (
        <div>
            {all.map((isi, index) => (
                <div key={index} className='flex justify-between items-center p-5 my-2' style={{ background: "#e9e9e9", borderRadius: '10px' }}>
                    <button
                        id="button"
                        className="rounded-lg bg-green-500 px-3 py-3 text-white hover:bg-green-600 md:ms-0"
                    >
                        <div id="text-button" className="flex">
                            <span id="button-icon" className="text-xl">
                                <IoChatbubbles style={{ fill: 'transparent', stroke: '#fff', strokeWidth: 25 }} />
                            </span>
                        </div>
                    </button>
                    <div className="text grow px-2">
                        <div className="title" style={{ fontWeight: '500' }}>{isi.judul}</div>
                        <div className="subtitle text-gray-400" style={{ fontSize: 'small' }}>{isi.deskripsi}</div>
                    </div>
                    <div className="time mx-6 text-gray-400 text-sm">{isi.waktu}</div>
                    <button className="delete"><IoTrash className='text-xl' style={{ fill: 'red' }} /></button>
                </div>
            ))}
        </div>
    )
}

export default Semua