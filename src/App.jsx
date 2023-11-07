import logo from "/vite.svg";
import Navbar from "@/components/layout-components/navbar";

function App() {
  return (
    <>
      <main className="font-body">
        <Navbar />
        <h1 className="text-positive">Vite + React</h1>
        <img src={logo} alt="" />
      </main>
    </>
  );
}

export default App;
