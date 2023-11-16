import logoGooglePlay from "@/assets/logo-google-play.png";

export default function ButtonGooglePlay() {
  return (
    <button
      id="button-google-play"
      className="m-1 flex rounded-md bg-black p-1 px-3 text-white hover:bg-opacity-95"
    >
      <span className="m-1 w-7">
        <img id="icon-google-play" src={logoGooglePlay} alt="app-store" />
      </span>
      <span className="ps-2 text-left">
        <div
          id="sub-text-button-google-play"
          className="text-[0.5rem] md:text-xs "
        >
          GET IN ON
        </div>
        <div id="text-button-google-play" className="text-sm md:text-lg">
          Google Play
        </div>
      </span>
    </button>
  );
}
