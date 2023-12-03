import pasienPhoto from "@/assets/pasien-photo.png";

// "response"= {
// "profile_image": "https://res.cloudinary.com/dw3n2ondc/image/upload/v1701132180/Reproduction-Health/a26bb4e6-7846-490c-95eb-61507796a5f6.jpg",
// "id": "088babfe-ded5-4481-b35c-f264b0bf6a61",
// "patient_id": "0c3255e5-c998-4a14-9484-e815a6359de4",
// "transaction_id": "1431f827-a221-4750-965e-830f1010cde2",
// "patient_name": "Muhammad Albert",
// "date_of_birth": "2003-01-16T00:00:00Z",
// "gender": "male",
// "height": 167,
// "weight": 55,
// "telephone_number": "",
// "email": "albert@gmail.com",
// "sequence_number": "0001",
// "date": "2010-01-02T00:00:00Z",
// "session": "siang",
// "location": "Jl. K.S. Tubun No.21, Petamburan, Kota Jakarta Pusat ",
// "payment_method": "manual_transfer",
// "total": 160000,
// "status": "processed"
// }

export const DataPasien = {
  profile_image: `https://res.cloudinary.com/dw3n2ondc/image/upload/v1701132180/Reproduction-Health/a26bb4e6-7846-490c-95eb-61507796a5f6.jpg`,
  patient_name: "Muhammad Albert",
  patient_id: "0c3255e5-c998-4a14-9484-e815a6359de4",
  date_of_birth: "2003-01-16T00:00:00Z",
  gender: "male",
  height: 167,
  weight: 55,
  telephone_number: "081234567890",
  email: "albert@gmail.com",
  sequence_number: "0001",
  date: "2010-01-02T00:00:00Z",
  session: "siang",
  location: "Jl. K.S. Tubun No.21, Petamburan, Kota Jakarta Pusat ",
  payment_method: "manual_transfer",
  total: 160000,
  status: "waiting",
};

export const PaymentDetail = [
  {
    "No. Ref": "0000086886456",
  },
  {
    "Tanggal Pembayaran": "23-10-2003,  13:22 WIB",
  },
  {
    "Metode Pembayaran": "Transfer Bank",
  },
  {
    "Nama Pengirim": "Supriyadi",
  },
  {
    Nominal: "Rp 113.456",
  },
  {
    "Biaya Admin": "Rp 10.000",
  },
  {
    Total: "Rp 123.456",
  },
];
