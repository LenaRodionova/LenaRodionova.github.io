import Commit from "./commit";

export default class GitHubApi {

  constructor() {
    this._apiUrl = "https://api.github.com/repos";
    this._repoName = "lenarodionova";
    this._authorName = "diploma";
  }

  getCommitCards(render, finalAction) {
    fetch(`${this._apiUrl}/${this._repoName}/${this._authorName}/commits`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .then(res => res.map(card => new Commit(
        card.commit.author.name,
        card.commit.committer.email,
        card.commit.author.date,
        card.commit.message,
        card.author.avatar_url)
      ))
      .then(res => render(res))
      .catch(error => {
        console.error(error);
        render([])
      })
      .finally(() => finalAction());
  }
}