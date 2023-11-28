import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export default function Toast({ pesan, position }) {
//   toast(pesan, {
//     position,
//     autoClose: 3000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     closeButton: <span className="my-auto">Abaikan</span>,
//     pauseOnHover: true,
//     progress: undefined,
//     className:
//       "bg-green-500 text-white ps-10 font-medium xl:font-semibold text-base xl:text-xl",
//   });
//   return (
//     <>
//       <ToastContainer />;
//     </>
//   );
// }

export const showNotify = (pesan, position) => {
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    closeButton: <span className="my-auto">Abaikan</span>,
    pauseOnHover: true,
    progress: undefined,
    className:
      "bg-green-500 text-white xl:ps-10 font-medium 2xl:font-semibold text-base 2xl:text-xl",
  });
};
