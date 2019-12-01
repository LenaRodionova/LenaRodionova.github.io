import GitHubApi from "./github-api";
import CommitBlock from "./commit-block";

export default class GitHubCardManager {

  constructor() {
    this._api = new GitHubApi();
    this._commitList = new CommitBlock();
  }

  init(finalAction) {
    this._api.getCommitCards(this._commitList.render, finalAction)
  }

}