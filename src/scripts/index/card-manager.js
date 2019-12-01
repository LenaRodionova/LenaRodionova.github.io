import NewsApi from "./news-api";
import CardBlock from "./card-block";
import {getDateForNewsApi} from "../date-format";
import CardStorage from "../card-storage";
import {errorParagraph, errorSection, errorTitle, finding, findingCards, loader, searchInput} from "../elements";

export default class CardManager {

  constructor() {
    this._maxCardsOnRow = 3;
    this._cardBlock = new CardBlock();
    this._newsApi = new NewsApi();
    this._storage = new CardStorage();
  }

  showCurrent() {
    const cards = this._storage.getCardList().cards;
    if (cards.length !== 0) {
      this._cardBlock.addCards(cards.slice(0, this._maxCardsOnRow));
      finding.classList.remove("finding_invisible");
      searchInput.value = this._storage.getQuery();
    }
  }

  showMoreCards() {
    const cards = this._storage.getCardList().cards;
    const visibleCardsCount = this._getVisibleCardsCount();
    this._cardBlock.addCards(cards.slice(visibleCardsCount, visibleCardsCount + this._maxCardsOnRow));
    this._displayOrHideButton(cards);
  }

  search(query) {
    this._cleanAllContent();
    const dates = getDateForNewsApi();
    this._storage.saveQuery(query);
    this._newsApi.getNews(
      dates.dataFrom,
      dates.dataTo,
      query,
      this._onSuccessRequest.bind(this),
      this._onError,
      this._loaderStart
    )
  }

  _cleanAllContent() {
    const range = document.createRange();
    range.selectNodeContents(findingCards);
    range.deleteContents();
  }

  _onSuccessRequest(cardList) {
    if (cardList.cards.length === 0) {
      this._onNotFound();
      return;
    }
    this._storage.saveCardList(cardList);
    this._cardBlock.addCards(cardList.cards.slice(0, this._maxCardsOnRow));
    loader.classList.add("preloader_invisible");
    finding.classList.remove("finding_invisible");
    this._displayOrHideButton(cardList.cards);
  }

  _loaderStart() {
    loader.classList.remove("preloader_invisible");
    errorSection.classList.add("error_invisible");
    finding.classList.add("finding_invisible");
  }

  _onError() {
    loader.classList.add("preloader_invisible");
    errorSection.classList.remove("error_invisible");
    errorTitle.textContent = "Во время запроса произошла ошибка";
    errorParagraph.textContent = "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
  }

  _onNotFound() {
    loader.classList.add("preloader_invisible");
    errorSection.classList.remove("error_invisible");
    errorTitle.textContent = "Ничего не найдено";
    errorParagraph.textContent = "К сожалению по вашему запросу ничего не найдено";

  }

  _displayOrHideButton(cards) {
    const visibleCardsCount = this._getVisibleCardsCount();
    const cardsCount = cards.length;
    if (cardsCount === visibleCardsCount) {
      this._cardBlock.hideButton();
    } else {
      this._cardBlock.showButton();
    }
  }


  _getVisibleCardsCount() {
    return document.querySelectorAll(".finding__card").length;
  }

}