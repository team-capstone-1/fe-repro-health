export function Button({ text, icon }) {
  return (
    <button
      id="button"
      className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-white hover:bg-green-600 md:ms-0"
    >
      <div id="text-button" className="me-1 flex">
        <span id="button-icon" className="me-2 text-xl">
          {icon}
        </span>
        {text}
      </div>
    </button>
  );
}
