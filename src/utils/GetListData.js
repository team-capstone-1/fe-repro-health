export function getListDataByDate(response, targetDate) {
  const data = response?.data;

  const targetData = data?.find((item) => item.date === targetDate);
  return targetData ? targetData.listData : null;
}
