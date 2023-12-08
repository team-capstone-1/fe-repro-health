import SetupRoutes from "@/routers";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer className="mt-14 w-full" />
      <SetupRoutes />
    </>
  );
}

export default App;
