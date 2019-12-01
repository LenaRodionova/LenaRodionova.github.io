import {analyticDayGraph, analyticGraphCount, analyticSection} from "../elements";

export default class AnalyticBlock {


  displayAnalyticGraph(analyticData, query) {
    const h1 = document.createElement("h1");
    h1.classList.add("analytics__title");
    h1.textContent = `Вы спросили: «${query}»`;
    analyticSection.appendChild(h1);

    const newsParagraph = this._createParagraph("Новостей за неделю:", analyticData.newsCount);
    const titleCountParagraph = this._createParagraph("Упоминаний в загаловках:", analyticData.titleCount);
    analyticSection.appendChild(newsParagraph);
    analyticSection.appendChild(titleCountParagraph);
    analyticData.createElements().forEach(row => analyticDayGraph.appendChild(row));
    analyticDayGraph.appendChild(analyticGraphCount.cloneNode(true));
  }

  _createParagraph(text, number) {
    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("analytics__paragraph");
    paragraphElement.textContent = text;

    const spanElement = document.createElement("span");
    spanElement.classList.add("analytics__paragraph-bold");
    spanElement.textContent = ` ${number}`;
    paragraphElement.appendChild(spanElement);

    return paragraphElement;
  }

}