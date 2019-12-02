export default class AnalyticManager {

  constructor(storage, analyticBlock, analyticCalculator) {
    this._storage = storage;
    this._analitycBlock = analyticBlock;
    this._analitycCalculator = analyticCalculator;
  }

  displayAnalytic() {
    const query = this._storage.getQuery();
    const cardList = this._storage.getCardList();
    const analyticData = this._analitycCalculator.calc(cardList, query);
    this._analitycBlock.displayAnalyticGraph(analyticData, query);
  }

}