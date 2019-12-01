import "./style/style.css";
import CardManager from "./scripts/index/card-manager";
import {findingButtonMore, searchForm, searchInput} from "./scripts/elements";
import InputManager from "./scripts/index/input/imput-manager";

const cardManager = new CardManager();
const inputManager = new InputManager(event => cardManager.search(searchInput.value), "search-form__button");

searchForm.addEventListener('click', inputManager.handleInput.bind(inputManager));
searchForm.addEventListener('input', inputManager.handleInput.bind(inputManager));

findingButtonMore.addEventListener('click', cardManager.showMoreCards.bind(cardManager));


cardManager.showCurrent();
