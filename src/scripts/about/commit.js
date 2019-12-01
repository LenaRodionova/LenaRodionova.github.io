import {formatDateForCards} from "../date-format";

export default class Commit {

    constructor(name, email, date, message, avatarUrl) {
        this._name = name;
        this._email = email;
        this._date = date;
        this._message = message;
        this._avatarUrl = avatarUrl;
    }

    createElement() {
        const glideSlide = document.createElement("div");
        glideSlide.classList.add("glide__slide");
        const a = document.createElement("a");
        a.classList.add("history__anchor");
        a.setAttribute("href", "");
        glideSlide.append(a);
        const card = document.createElement("div");
        card.classList.add("history__card");

        a.appendChild(card);

        const date = document.createElement("p");
        date.classList.add("history__date");
        date.textContent = formatDateForCards(new Date(this._date));
        card.appendChild(date);

        const user = document.createElement("div");
        user.classList.add("history__user");
        card.appendChild(user);

        const photo = document.createElement("img");
        photo.classList.add("history__photo");
        photo.setAttribute("alt", "Автор коммита");
        photo.setAttribute("src", this._avatarUrl);
        user.appendChild(photo);

        const personal = document.createElement("div");
        personal.classList.add("history__personal");
        user.appendChild(personal);

        const text = document.createElement("p");
        text.classList.add("history__text");
        text.textContent = this._message;
        card.appendChild(text);


        const email = document.createElement("p");
        email.classList.add("history__email");
        email.textContent = this._email;
        personal.appendChild(email);

        const username = document.createElement("p");
        username.classList.add("history__username");
        username.textContent = this._name;
        personal.appendChild(username);

        return glideSlide;

    }

}
/*
<div class="history__card">
            <p class="history__date">14 августа, 2019</p>
            <div class="history__user">
              <img alt="Автор коммита" class="history__photo" src="<%=require('../images/user_photo.png')%>">
              <div class="history__personal">
                <p class="history__username">Антон Долинин</p>
                <p class="history__email">anton@yandex.ru</p>
              </div>
            </div>
            <p class="history__text">Emmet (formerly Zen Coding) is a web- developer’s toolkit that
              can greatly improve your HTML & CSS workflow.
            </p>
          </div>
*/