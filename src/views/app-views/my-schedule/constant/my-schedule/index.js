// Contoh Response dari API

// const response = {
//   doctor_id: "uuid",
//   data: [
//     {
//       date: "30-10-2023",
//       listData: [
//         {
//           type: "Masuk",
//           content: "Pagi",
//           appointment: [
//             {
//               patient: "Anastasia Amalia",
//               id: 9,
//             },
//             {
//               patient: "Supriyadi",
//               id: 10,
//             },
//           ],
//         },
//         {
//           type: "Masuk",
//           content: "Siang",
//           appointment: [
//             {
//               patient: "Anastasia Amalia",
//               id: 9,
//             },
//             {
//               patient: "Supriyadi",
//               id: 10,
//             },
//           ],
//         },
//         {
//           type: "Tidak Masuk",
//           content: "Malam",
//           appointment: [
//             {
//               patient: "Anastasia Amalia",
//               id: 9,
//             },
//             {
//               patient: "Supriyadi",
//               id: 10,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export const Response = {
  doctor_id: "uuid",
  data: [
    {
      date: "30-10-2023",
      listData: [
        {
          type: "Masuk",
          content: "Pagi",
          appointment: 2,
        },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "31-10-2023",
      listData: [
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "01-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
      ],
    },
    {
      date: "02-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "03-11-2023",
      listData: [{ type: "Libur", content: "Hari Libur Nasional" }],
    },
    {
      date: "06-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "07-11-2023",
      listData: [
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "08-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
      ],
    },
    {
      date: "09-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "10-11-2023",
      listData: [{ type: "Masuk", content: "Pagi", appointment: 2 }],
    },
    {
      date: "13-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "14-11-2023",
      listData: [
        { type: "Tidak Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "15-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Tidak Masuk", content: "Siang", appointment: 2 },
      ],
    },
    {
      date: "16-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "17-11-2023",
      listData: [{ type: "Masuk", content: "Pagi", appointment: 2 }],
    },
    {
      date: "20-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "21-11-2023",
      listData: [
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "22-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
      ],
    },
    {
      date: "23-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "24-11-2023",
      listData: [{ type: "Masuk", content: "Pagi", appointment: 2 }],
    },
    {
      date: "27-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "28-11-2023",
      listData: [
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "29-11-2023",
      listData: [{ type: "Libur", content: "Hari Libur Nasional" }],
    },
    {
      date: "30-11-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "01-12-2023",
      listData: [{ type: "Masuk", content: "Pagi", appointment: 2 }],
    },
    {
      date: "04-12-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "05-12-2023",
      listData: [
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "06-12-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
      ],
    },
    {
      date: "07-12-2023",
      listData: [
        { type: "Masuk", content: "Pagi", appointment: 2 },
        { type: "Masuk", content: "Siang", appointment: 2 },
        { type: "Tidak Masuk", content: "Malam", appointment: 2 },
      ],
    },
    {
      date: "08-12-2023",
      listData: [{ type: "Masuk", content: "Pagi", appointment: 2 }],
    },
  ],
};
