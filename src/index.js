import "./style/style.css";
import CardManager from "./scripts/index/card-manager";
import {findingButtonMore, searchForm, searchInput} from "./scripts/elements";
import InputManager from "./scripts/index/input/imput-manager";
import CardBlock from "./scripts/index/card-block";
import NewsApi from "./scripts/index/news-api";
import CardStorage from "./scripts/card-storage";
import {maxCardsOnRow, newsApiKey} from "./scripts/params";
import InputValidator from "./scripts/index/input/input-validator";
import InputBlock from "./scripts/index/input/input-block";

const cardBlock = new CardBlock();
const newsApi = new NewsApi(newsApiKey);
const storage = new CardStorage();
const inputValidator = new InputValidator();
const inputBlock = new InputBlock();
const cardManager = new CardManager(maxCardsOnRow, cardBlock, newsApi, storage, inputBlock);

const inputManager = new InputManager(
  event => cardManager.search(searchInput.value),
  "search-form__button",
  inputBlock,
  inputValidator
);

searchForm.addEventListener('click', inputManager.handleInput.bind(inputManager));
searchForm.addEventListener('input', inputManager.handleInput.bind(inputManager));

findingButtonMore.addEventListener('click', cardManager.showMoreCards.bind(cardManager));


cardManager.showCurrent();
