import CardList from "./index/card-list";
import Card from "./index/card";

export default class CardStorage {
  constructor() {
    this._queryName = "query";
    this._cardsObjName = "cardsAnalytics";
  }

  saveCardList(cardList) {
    let cardsObj = JSON.stringify(cardList);
    localStorage.setItem(this._cardsObjName, cardsObj);
  }

  saveQuery(query) {
    localStorage.setItem(this._queryName, query);
  }

  getCardList() {
    const cardListObj = JSON.parse(localStorage.getItem(this._cardsObjName));
    const totalResult = cardListObj.totalResult;
    const cards = cardListObj.cards.map(obj => new Card(
      obj.sourceName,
      obj.title,
      obj.publishedAt,
      obj.description,
      obj.utlToImage,
      obj.urlToSource)
    );
    return new CardList(totalResult, cards);
  }

  getQuery() {
    return localStorage.getItem(this._queryName);
  }
}