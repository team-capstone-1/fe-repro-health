import { AiFillApple } from "react-icons/ai";

export default function ButtonAppStore() {
  return (
    <button
      id="button-app-store"
      className="m-1 flex rounded-md bg-black p-1 pe-5 ps-2 text-white hover:bg-opacity-95"
    >
      <span id="icon-app-store" className="text-4xl">
        <AiFillApple />
      </span>
      <span className="ms-2 block">
        <div
          id="sub-text-button-app-store"
          className="text-[0.5rem] md:text-xs"
        >
          Download on the
        </div>
        <div id="text-button-app-store" className="text-sm md:text-xl">
          App Store
        </div>
      </span>
    </button>
  );
}
