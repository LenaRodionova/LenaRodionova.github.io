import AnalyticData from "./analytic-data";

export default class AnalyticCalculator {

  constructor() {
    this._dateShift = 7;
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
          const descriptionMatchCount = (card.description.match(regexp) || []).length;
          return titleMatchCount + descriptionMatchCount;
        })
        .reduce((acc, number, index, array) => {
          return acc + number
        }, 0);
      return {date: date, number: count}
    });
    const titleCount = datesToNumbers.map(item => item.number).reduce((acc, number) => acc + number, 0);
    return new AnalyticData(newsCount, titleCount, datesToNumbers);

  }

}