import React from 'react';
import BannerDownload from "@/components/shared-components/BannerDownload";
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    const privacy = [
        {
            title: "Informasi Anda",
            subs: ["Informasi yang dikumpulkan saat Anda menggunakan Platform, menerima atau menyediakan Layanan, meliputi:"],
            textContent: [
                "Informasi Pribadi Anda meliputi nama, alamat, nomor telepon, tanggal lahir, dan alamat email yang Anda berikan saat mendaftar di Platform kami. Informasi ini juga mencakup informasi pengidentifikasi pribadi lainnya yang Anda tambahkan ke akun, seperti biografi.",
                "Informasi Kesehatan Pribadi Pelanggan meliputi jenis kelamin, kondisi kesehatan yang diketahui, pengobatan, alergi, vaksinasi, riwayat medis, target kesehatan sekaligus resep, laporan, hasil laboratorium, dan berkas medis yang diunggah oleh Pelanggan dari waktu ke waktu di Platform."
            ]
        },
        {
            title: "Tujuan Pengumpulan Data",
            subs: ["Kami mengumpulkan informasi pribadi Anda untuk tujuan berikut:"],
            textContent: [
                "Memberikan layanan konsultasi dokter dan perawatan kesehatan yang sesuai.",
                "Administrasi akun pengguna.",
                "Komunikasi terkait perjanjian konsultasi dokter dan informasi lainnya yang relevan."
            ]
        },
        {
            title: "Keamanan Data",
            subs: ["Kami mengambil langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan yang tidak sah. Data sensitif yang dikirimkan melalui website kami akan dienkripsi menggunakan protokol keamanan yang sesuai."],
            textContent: []
        },
        {
            title: "Hak Pengguna",
            subs: ["Anda memiliki hak untuk:"],
            textContent: [
                "Mengakses dan memperbaiki informasi pribadi Anda.",
                "Meminta penghapusan data pribadi Anda.",
                "Meminta pembatasan penggunaan data pribadi Anda.",
                "Menarik izin penggunaan data Anda."
            ]
        },
        {
            title: "Perubahan Kebijakan",
            subs: ["Kebijakan privasi ini dapat diperbarui sesuai kebijakan yang berlaku. Setiap perubahan akan diumumkan di website kami. Penggunaan Platform secara berkelanjutan akan menandakan persetujuan dan penerimaan Anda atas perubahan-perubahan tersebut."],
            textContent: []
        },
        {
            title: "Kontak",
            subs: ["Hukum privasi Indonesia memberikan hak bagi individu untuk mengakses, mengubah, dan menghapus informasi pribadi mereka. Jika Anda ingin mengubah atau menghapus informasi yang kami simpan mengenai Anda, silakan hubungi kami di bawah ini. Dan iika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini, silakan hubungi kami melalui:"],
            textContent: []
        },
        {
            title: "Reprohealth Customer Care",
            subs: [
                "Email : support@reprohealth.com", 
                "Nomor Telepon : 0821 3358 1616"
            ],
            textContent: []
        }
    ]
  return (
    <>
    <section className='base-container'>
        <Breadcrumb 
            className="pt-4 sm:pt-12"
            separator={
                <p className="-mt-[0.26em] text-2xl min-[991.98px]:-mt-1">»</p>
            }
            items={[
                {
                title: (
                    <Link className="text-green-500" to="/">
                    <p>Beranda</p>
                    </Link>
                ),
                },
                {
                title: <p className="cursor-default">Kebijakan Privasi</p>,
                },
            ]}
        />
    </section>

    <section className='base-container'>
        <h1 className='mt-5 mb-4'>Kebijakan Privasi</h1>
        <p className='font-medium text-base'>
        Selamat datang di Website Reprohealth. Kami berkomitmen untuk menjaga kerahasiaan informasi pribadi Anda dan memberikan perlindungan terhadap data yang Anda bagikan kepada kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkap, dan melindungi informasi pribadi Anda. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi dan terikat oleh kebijakan privasi ini.
        </p>
        {privacy.map((items, indexs) => (
            <div key={indexs}>
                <h5 className='font-bold text-base'>{items.title}</h5>
                <h5 className='font-medium text-base'>{items.subs[0]}</h5>
                <h5 className='font-medium text-base'>{items.subs[1]}</h5>
                <ul>
                {items.textContent.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className='mx-2 font-medium text-base'>{index + 1}.</span>
                        <span className='font-medium text-base'>{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        ))}
    </section>

    <section className='base-container mt-[3.5rem] mb-[2rem]'>
        <BannerDownload />
    </section>
    </>
  )
}
