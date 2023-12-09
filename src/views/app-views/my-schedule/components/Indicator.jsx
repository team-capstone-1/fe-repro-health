export function Indicator({ text, type, date, displayedDate }) {
  let textColor;
  let bgColor;
  if (date.month() === displayedDate.month()) {
    if (type === "Masuk" && text === "Pagi") {
      bgColor = "bg-positive";
      textColor = "text-positive font-medium";
    } else if (type === "Masuk" && text === "Siang") {
      bgColor = "bg-link";
      textColor = "text-link font-medium";
    } else if (type === "Masuk" && text === "Malam") {
      bgColor = "bg-warning";
      textColor = "text-warning font-medium";
    } else if (type === "Tidak Masuk") {
      bgColor = "bg-grey-100";
      textColor = "text-grey-100 font-medium";
    } else {
      bgColor = "bg-negative-25";
      textColor = "text-negative font-medium";
    }
  } else {
    if (type === "Masuk" && text === "Pagi") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (type === "Masuk" && text === "Siang") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (type === "Masuk" && text === "Malam") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (type === "Tidak Masuk") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else {
      bgColor = "bg-grey-50";
      textColor = "text-grey-300 font-medium";
    }
  }
  return (
    <>
      {type === "Libur" ? (
        <div
          id="indicator-wrapper"
          className={`flex rounded-md px-2 text-start leading-5 ${bgColor} ${textColor}`}
        >
          {text}
        </div>
      ) : (
        <div
          id="indicator-wrapper"
          className={`flex items-center justify-between gap-1 ${textColor}`}
        >
          <div
            id="indicator-item"
            className={`h-5 w-[0.25rem] rounded-bl-full rounded-tl-full ${bgColor}`}
          ></div>
          {text}
        </div>
      )}
    </>
  );
}
