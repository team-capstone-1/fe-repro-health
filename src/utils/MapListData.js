export function formatStrDayJs(date) {
  return date?.format("YYYY-MM-DD");
}

export function mapListData(data, eventDate) {
  const event = {};

  function add(_case, values) {
    event[_case] = values;
  }

  data?.forEach((event) => {
    add(event.date, event.listData);
  });

  const key = formatStrDayJs(eventDate);
  return event[key] || [];
}
