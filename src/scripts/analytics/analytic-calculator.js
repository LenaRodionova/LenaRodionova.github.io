import AnalyticData from "./analytic-data";

export default class AnalyticCalculator {

  constructor(dateShift) {
    this._dateShift = dateShift;
  }

  calc(cardList, query) {
    const regexp = new RegExp(query, "gi");

    const newsCount = cardList.totalResult;
    const cards = cardList.cards;
    const datesToCount = [];
    for (let i = 0; i < this._dateShift; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      datesToCount.push(date);
    }
    const datesToNumbers = datesToCount.map(date => {
      const count = cards
        .filter(card => {
          return new Date(card.publishedAt).getDate() === date.getDate()
        })
        .map(card => {
          const titleMatchCount = (card.title.match(regexp) || []).length;
          const descriptionMatchCount = card.description !== null ? (card.description.match(regexp) || []).length : 0;
          return titleMatchCount + descriptionMatchCount;
        })
        .reduce((acc, number) => {
          return acc + number
        }, 0);
      return {date: date, number: count}
    });
    const titleCount = datesToNumbers.map(item => item.number).reduce((acc, number) => acc + number, 0);
    return { newsCount, titleCount, datesToNumbers };

  }

}