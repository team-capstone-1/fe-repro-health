export function Indicator({ session, doctor_available, date, displayedDate }) {
  let textColor;
  let bgColor;
  if (date.month() === displayedDate.month()) {
    if (doctor_available && session === "pagi") {
      bgColor = "bg-positive";
      textColor = "text-positive font-medium";
    } else if (doctor_available && session === "siang") {
      bgColor = "bg-link";
      textColor = "text-link font-medium";
    } else if (doctor_available && session === "malam") {
      bgColor = "bg-warning";
      textColor = "text-warning font-medium";
    } else if (!doctor_available) {
      bgColor = "bg-grey-100";
      textColor = "text-grey-100 font-medium";
    } else {
      bgColor = "bg-negative-25";
      textColor = "text-negative font-medium";
    }
  } else {
    if (doctor_available && session === "pagi") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (doctor_available && session === "siang") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (doctor_available && session === "malam") {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else if (!doctor_available) {
      bgColor = "bg-grey-50";
      textColor = "text-grey-50 font-medium";
    } else {
      bgColor = "bg-grey-50";
      textColor = "text-grey-300 font-medium";
    }
  }
  return (
    <>
      {doctor_available === "Libur" ? (
        <div
          id="indicator-wrapper"
          className={`flex w-full rounded-md px-2 text-start capitalize leading-5 ${bgColor} ${textColor}`}
        >
          {session}
        </div>
      ) : (
        <div
          id="indicator-wrapper"
          className={`flex items-center justify-between gap-1 capitalize ${textColor}`}
        >
          <div
            id="indicator-item"
            className={`h-5 w-[0.25rem] rounded-bl-full rounded-tl-full  ${bgColor}`}
          ></div>
          {session}
        </div>
      )}
    </>
  );
}
