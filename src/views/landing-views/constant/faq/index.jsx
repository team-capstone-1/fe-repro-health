/* eslint-disable react/no-unescaped-entities */
export const DataFaq = {
  title: "Frequently Asked Question",
  textContent: "Punya pertanyaan lanjutan?",
};

export const QuestionFaq = [
  {
    key: "1",
    label: <p>Bagaimana cara melihat detail janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk melihat detail janji temu kamu:
        </p>
        <p>1. Pilih 'Riwayat' pada menu bagian bawah layar. </p>
        <p>2. Pilih janji temu untuk melihat detailnya.</p>
      </>
    ),
  },
  {
    key: "2",
    label: <p>Bagaimana cara membatalkan janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk membatalkan janji temu:
        </p>
        <p>1. Pilih 'Riwayat Transaksi' pada menu bagian bawah layar.</p>
        <p>2. Pilih janji yang ingin dibatalkan.</p>
        <p>3. Pilih 'Batalkan'.</p>
      </>
    ),
  },
  {
    key: "3",
    label: <p>Berapa lama estimasi pengembalian dana (refund) ReproHealth?</p>,
    children: (
      <>
        <p className="mb-4">
          Berikut adalah perkiraan kapan pengembalian danamu akan diterima:
        </p>
        <p>
          Kartu Debit : Maksimal 14 hari kerja tergantung bank (tidak termasuk
          hari Sabtu, Minggu & Libur Nasional).
        </p>
        <p className="mt-4">
          Apabila sudah lewat dari waktu di atas dan kamu belum menerima
          pengembalian dana, hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
  {
    key: "4",
    label: <p>Bagaimana cara mengubah jadwal janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk mengubah jadwal janji temu:
        </p>
        <p>1. Pilih 'Riwayat Transaksi' pada menu bagian bawah layar.</p>
        <p>2. Pilih janji yang ingin kamu ubah dan klik 'Ubah Jadwal'.</p>
        <p>3. Pilih tanggal dan waktu yang baru.</p>
        <p className="mt-4">
          Apabila langkah di atas ini sudah tidak bisa dilakukan dan kamu perlu
          mengubah jadwal, hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
  {
    key: "5",
    label: (
      <p>
        Saya tidak bisa membuat pesanan janji temu. Apa yang harus saya lakukan?
      </p>
    ),
    children: (
      <>
        <p className="mb-4">
          Jika kamu mengalami kendala membuat pesanan janji temu di ReproHealth,
          coba perbarui aplikasi ReproHealth kamu hingga ke versi terbaru.
        </p>
        <p>
          Jika masih mengalami kendala, silakan hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
];
