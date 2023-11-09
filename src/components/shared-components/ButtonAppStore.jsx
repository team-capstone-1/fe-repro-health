import { AiFillApple } from "react-icons/ai";

export default function ButtonAppStore() {
  return (
    <button className="flex p-1 ps-2 pe-5 rounded-md text-white bg-black hover:bg-opacity-95 m-1">
      <span className="text-4xl">
        <AiFillApple />
      </span>
      <span className="block ms-2">
        <div className="text-[0.5rem] md:text-xs">Download on the</div>
        <div className="text-sm md:text-xl">App Store</div>
      </span>
    </button>
  );
}
