const dateShift = 7;
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


export function getDateForNewsApi() {
  let dataFrom = new Date();

  dataFrom = dataFrom.getFullYear() + "-" + (dataFrom.getMonth() + 1) + "-" + dataFrom.getDate();

  let dataTo = new Date();
  dataTo.setDate(dataTo.getDate() - dateShift);
  dataTo = dataTo.getFullYear() + "-" + (dataTo.getMonth() + 1) + "-" + dataTo.getDate();
  return {dataFrom, dataTo};
}

export function formatDateForCards(date) {
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`

}

export function formatDateForAnalytic(date) {
  return `${date.getDate()}, ${days[date.getDay()]}`;
}


