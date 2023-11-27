export const formatStrDayJs = (date) => {
  return date?.format("DD-MM-YYYY");
};
export const mapListData = (data, eventDate) => {
  const event = {};

  // and you can create a new entry with this function
  function add(_case, values) {
    event[_case] = values;
  }

  data.forEach((event) => {
    add(event.date, event.listData);
  });

  const key = formatStrDayJs(eventDate);
  return event[key] || [];
};
