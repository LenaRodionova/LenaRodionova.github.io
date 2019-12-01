import CardStorage from "../card-storage";
import AnalyticBlock from "./analytic-block";
import AnalyticCalculator from "./analytic-calculator";

export default class AnalyticManager {

  constructor() {
    this._storage = new CardStorage();
    this._analitycBlock = new AnalyticBlock();
    this._analitycCalculator = new AnalyticCalculator();
  }

  displayAnalytic() {
    const query = this._storage.getQuery();
    const cardList = this._storage.getCardList();
    const analyticData = this._analitycCalculator.calc(cardList, query);
    this._analitycBlock.displayAnalyticGraph(analyticData, query);
  }

}