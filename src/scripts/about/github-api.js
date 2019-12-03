export default class GitHubApi {

  constructor(apiUrl, repoName, authorName) {
    this._apiUrl = apiUrl;
    this._repoName = repoName;
    this._authorName = authorName;
  }

  getCommitCards(render, finalAction, createCommitCard, loaderStart, onError, onSuccess) {
    loaderStart();
    fetch(`${this._apiUrl}/${this._repoName}/${this._authorName}/commits`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .then(createCommitCard)
      .then(res => {
        render(res);
        onSuccess();
        finalAction();
      })
      .catch(onError);
  }
}