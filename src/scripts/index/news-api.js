export default class NewsApi {

  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  getNews(dataFrom, dataTo, formQuery, onSuccess, onError, loaderStart, cardCreate) {
    loaderStart();
    fetch(`https://newsapi.org/v2/everything?q=${formQuery}&from=${dataFrom}&apiKey=${this._apiKey}&to=${dataTo}&pageSize=100`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .then(cardCreate)
      .then(onSuccess)
      .catch(onError);
  }
}
