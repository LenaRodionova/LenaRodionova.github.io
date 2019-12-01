const dateShift = 7;
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


export function getDateForNewsApi() {
    let dataFrom = new Date();

    dataFrom = dataFrom.getFullYear() + "-" + dataFrom.getMonth() + "-" + dataFrom.getDate();

    let dataTo = new Date();
    dataTo.setDate(dataTo.getDate() - dateShift);
    dataTo = dataTo.getFullYear() + "-" + dataTo.getMonth() + "-" + dataTo.getDate();
    return {dataFrom, dataTo};
}

export function formatDateForCards(date) {
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return `${day} ${month}, ${year}`

}

export function formatDateForAnalytic(date) {
    return `${date.getDate()}, ${days[date.getDay()]}`;
}


