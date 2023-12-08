import SetupRoutes from "@/routers";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        enableMultiContainer
        containerId="xl"
        className="mt-14 w-full"
      />
      <ToastContainer
        enableMultiContainer
        containerId="md"
        className="mt-14 w-[450px]"
      />
      <SetupRoutes />
    </>
  );
}

export default App;
