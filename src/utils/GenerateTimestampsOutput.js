export function generateTimestampOutput(timestamp) {
  const date = new Date(timestamp);
  const currentDate = new Date();

  const timeDifference = currentDate - date;

  const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const monthsDifference = currentDate.getMonth() - date.getMonth();
  const hoursDifference = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutesDifference = Math.floor(
    (timeDifference % (60 * 60 * 1000)) / (60 * 1000),
  );

  if (daysDifference === 0) {
    if (hoursDifference > 0) {
      return `${hoursDifference} jam yang lalu`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} menit yang lalu`;
    } else {
      return "Baru saja";
    }
  } else if (daysDifference === 1) {
    return "1 hari yang lalu";
  } else if (monthsDifference === 0) {
    return `${daysDifference} hari yang lalu`;
  } else {
    let formattedDate = `${date.getDate()} ${getMonthName(
      date.getMonth(),
    )} ${date.getFullYear()}`;
    return formattedDate;
  }
}

function getMonthName(monthIndex) {
  let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return months[monthIndex];
}
