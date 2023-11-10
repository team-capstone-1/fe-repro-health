import React from "react";
import Breadcrumb from "@/components/layout-components/Breadcrumb";
import BannerDownload from "@/components/shared-components/BannerDownload";

export default function UserTerms() {
  const terms = [
    {
      title: "Layanan Website",
      listTerms: [
        "Website ReproHealth ini adalah landing page yang mempromosikan aplikasi ReproHealth, yang dirancang untuk memberikan informasi dan dukungan seputar kesehatan reproduksi.",
      ],
    },
    {
      title: "Ketentuan Penggunaan Website",
      listTerms: [
        "Anda harus berusia minimal 18 tahun atau mendapatkan izin dari orang tua atau wali hukum untuk menggunakan layanan kami.",
        "Anda bertanggung jawab atas keakuratan dan kebenaran informasi yang Anda berikan saat menggunakan layanan kami.",
        "Anda setuju untuk tidak menggunakan layanan kami untuk tujuan ilegal atau melanggar hukum.",
        "Anda menyatakan bahwa semua informasi dan/atau dokumen yang Anda isi atau sampaikan kepada Halodoc adalah akurat, benar, lengkap, terkini, dan sesuai.",
        "Kami berhak membatasi atau mengakhiri akses Anda ke layanan kami jika kami mendeteksi penggunaan yang melanggar ketentuan ini.",
      ],
    },
    {
      title: "Privasi dan Keamanan Data",
      listTerms: [
        "Kami berkomitmen untuk menjaga kerahasiaan data pribadi Anda sesuai dengan kebijakan privasi kami. Silakan baca kebijakan privasi kami untuk memahami bagaimana kami mengumpulkan, mengelola, dan melindungi informasi Anda.",
        "Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda, termasuk kata sandi, dan Anda setuju untuk memberi tahu kami segera jika ada penggunaan yang tidak sah atau akses yang tidak sah ke akun Anda.",
      ],
    },
    {
      title: "Perubahan pada Ketentuan Pengguna",
      listTerms: [
        "Kami berhak untuk mengubah ketentuan pengguna ini dari waktu ke waktu. Perubahan akan diumumkan di website kami, dan penggunaan lanjutan layanan kami akan dianggap sebagai persetujuan Anda terhadap perubahan tersebut.",
      ],
    },
  ];

  return (
    <div className="base-container">
      <Breadcrumb currentPage="Ketentuan Pengguna" />
      <h1 className="mb-4">Ketentuan Pengguna</h1>
      <p className="pb-3 text-justify text-base">
        Berikut adalah Syarat dan Ketentuan Penggunaan Platform Reproheath yang
        berisi semua peraturan dan ketentuan yang secara otomatis mengikat
        ketika Anda melakukan kunjungan, mengunduh, memasang, menggunakan
        Platform dan/atau menikmati semua fitur dan fasilitas yang disediakan
        pada Platform ReproHealth.
      </p>
      {terms.map((section, index) => (
        <div key={index}>
          <strong className="mb-1 mt-3 block">
            {index + 1}. {section.title}
          </strong>
          <ul className="list-inside list-disc pl-[0.5rem] text-justify">
            {section.listTerms.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="mr-2 text-black">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="my-[5rem]">
        <BannerDownload />
      </div>
    </div>
  );
}
