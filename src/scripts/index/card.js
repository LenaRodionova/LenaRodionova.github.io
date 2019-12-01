import {formatDateForCards} from "../date-format";

export default class Card {

    constructor(sourceName, title, publishedAt, description, utlToImage, urlToSource) {
        this.sourceName = sourceName;
        this.title = title;
        this.publishedAt = publishedAt;
        this.description = description;
        this.utlToImage = utlToImage;
        this.urlToSource = urlToSource;
    }

    createElement(){
        const findingCard = document.createElement("div");
        findingCard.classList.add("finding__card");

        const cardImg = document.createElement("img");
        cardImg.classList.add("finding__card-img");
        findingCard.appendChild(cardImg);
        cardImg.setAttribute("src", this.utlToImage);
        cardImg.setAttribute("alt", "Картинка к новости");

        const cardContent = document.createElement("div");
        cardContent.classList.add("finding__card-content");
        findingCard.appendChild(cardContent);

        const dateParagraph = document.createElement("p");
        dateParagraph.classList.add("finding__card-paragraph");
        dateParagraph.textContent = formatDateForCards(new Date(this.publishedAt));
        cardContent.appendChild(dateParagraph);

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("finding__card-title");
        cardContent.appendChild(cardTitle);
        cardTitle.textContent = this.title;

        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.classList.add("finding__card-paragraph");
        descriptionParagraph.textContent = this.description;
        cardContent.appendChild(descriptionParagraph);

        const cardLink = document.createElement("a");
        cardLink.classList.add("finding__card-link");
        cardLink.textContent = this.sourceName;
        cardLink.setAttribute("href", this.urlToSource);
        cardContent.appendChild(cardLink);

        return findingCard;
    }

}

