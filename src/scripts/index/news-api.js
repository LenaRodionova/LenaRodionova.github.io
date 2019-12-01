import CardList from "./card-list";
import Card from "./card";

export default class NewsApi {

  constructor() {
    this._apiKey = "5e2d8daf8aef4d299992206714a804e7";
  }

  getNews(dataFrom, dataTo, formQuery, onSuccess, onError, loaderStart) {
    loaderStart();
    fetch(`https://newsapi.org/v2/everything?q=${formQuery}&from=${dataFrom}&apiKey=${this._apiKey}&to=${dataTo}&pageSize=100`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .then(res => {
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

      })
      .then(onSuccess)
      .catch(onError);
  }
}
