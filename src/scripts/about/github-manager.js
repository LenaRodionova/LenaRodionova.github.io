import Commit from "./commit";
import {displayContent, displayError, displayLoader} from "../api-helper";
import {glide} from "../elements";

export default class GitHubCardManager {

  constructor(api, commitBlock) {
    this._api = api;
    this._commitList = commitBlock;
  }

  init(finalAction) {
    this._api.getCommitCards(
      this._commitList.render,
      finalAction,
      this._commitCardCreation,
      displayLoader,
      this._onError,
      this._onSuccess
    );
  }

  _commitCardCreation(res) {
    return res.map(card => new Commit(
      card.commit.author.name,
      card.commit.committer.email,
      card.commit.author.date,
      card.commit.message,
      card.author.avatar_url)
    )
  }

  _onError(err) {
    console.log(err);
    displayError(
      "Во время запроса произошла ошибка",
      "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    );
  }

  _onSuccess() {
    displayContent(() => glide.classList.remove("glide_invisible"));
  }

}