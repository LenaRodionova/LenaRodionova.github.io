import {formatDateForAnalytic} from "../date-format";

export default class AnalyticData {

  constructor(data) {
    this.newsCount = data.newsCount;
    this.titleCount = data.titleCount;
    this.datesToNumbers = data.datesToNumbers;
  }

  createElements() {
    return this.datesToNumbers.map(this._createRow.bind(this));
  }

  _createRow(dateToNumber) {

    const column = document.createElement("div");
    column.classList.add("analytic-day__graph-column");

    const columnParagraph = document.createElement("p");
    columnParagraph.classList.add("analytic-day__graph-column-paragraph");
    column.appendChild(columnParagraph);
    columnParagraph.textContent = formatDateForAnalytic(dateToNumber.date);

    const graphRow = document.createElement("div");
    graphRow.classList.add("analytic-day__graph-item");
    graphRow.textContent = dateToNumber.number;
    graphRow.style.width = `${dateToNumber.number > 1 ? dateToNumber.number : 1}%`;
    column.appendChild(graphRow);

    return column;
  }
}

