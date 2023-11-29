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

// export const showNotify = (pesan, position) => {
//   toast(pesan, {
//     position,
//     autoClose: 3000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     closeButton: (
//       <span className="my-auto text-green-200 2xl:me-4">Abaikan</span>
//     ),
//     pauseOnHover: true,
//     progress: undefined,
//     className:
//       "bg-green-500 text-white xl:ps-10 font-medium 2xl:font-semibold text-base 2xl:text-xl",
//   });
// };

const errorStyle = {
  className:
    "bg-red-500 text-white ps-10 font-medium xl:font-semibold text-base xl:text-xl",
};

const successStyle = {
  className:
    "bg-green-500 text-white ps-10 font-medium xl:font-semibold text-base xl:text-xl",
};

const defaultStyle = {
  className:
    "bg-gray-500 text-white ps-10 font-medium xl:font-semibold text-base xl:text-xl",
};

export const showErrorToast = (pesan, position) => {
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    closeButton: <span className="my-auto text-red-200">Abaikan</span>,
    pauseOnHover: true,
    progress: undefined,
    ...errorStyle,
  });
};

export const showSuccessToast = (pesan, position) => {
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    closeButton: <span className="my-auto text-green-200">Abaikan</span>,
    pauseOnHover: true,
    progress: undefined,
    ...successStyle,
  });
};

export const showDefaultToast = (pesan, position) => {
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    closeButton: <span className="my-auto text-gray-200">Abaikan</span>,
    pauseOnHover: true,
    progress: undefined,
    ...defaultStyle,
  });
};
