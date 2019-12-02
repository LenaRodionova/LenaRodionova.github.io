import {getDateForNewsApi} from "../date-format";
import {finding, findingCards, searchFormButton, searchInput} from "../elements";
import Card from "./card";
import CardList from "./card-list";
import {displayContent, displayError, displayLoader} from "../api-helper";

export default class CardManager {

  constructor(maxCardsOnRow, cardBlock, newsApi, storage, inputBlock) {
    this._maxCardsOnRow = maxCardsOnRow;
    this._cardBlock = cardBlock;
    this._newsApi = newsApi;
    this._storage = storage;
    this._inputBlock = inputBlock;
  }

  showCurrent() {
    const cards = this._storage.getCardList().cards;
    if (cards.length !== 0) {
      this._cardBlock.addCards(cards.slice(0, this._maxCardsOnRow));
      finding.classList.remove("finding_invisible");
      searchInput.value = this._storage.getQuery();
      searchFormButton.disabled = false;
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

    this._newsApi.getNews(
      dates.dataFrom,
      dates.dataTo,
      query,
      (cardList) => {
        this._onSuccessRequest(cardList);
        this._storage.saveQuery(query);
      },
      this._onError.bind(this),
      this._loaderStart.bind(this),
      this._cardListCreation
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
    displayContent(() => finding.classList.remove("finding_invisible"));
    this._displayOrHideButton(cardList.cards);
    this._inputBlock.enableInput();
  }

  _loaderStart() {
    displayLoader();
    finding.classList.add("finding_invisible");
    this._inputBlock.disableInput();
  }

  _onError() {
    displayError(
      "Во время запроса произошла ошибка",
      "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    );
    this._inputBlock.enableInput();
  }

  _onNotFound() {
    displayError(
      "Ничего не найдено",
      "К сожалению по вашему запросу ничего не найдено"
    );
    this._inputBlock.enableInput();
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

  _cardListCreation(res) {
    const totalResult = res.totalResults;
    const cards = res.articles.map(card => new Card(
      card.source.name,
      card.title,
      card.publishedAt,
      card.description,
      card.urlToImage,
      card.url
    ));
    return new CardList(totalResult, cards);
  }

}