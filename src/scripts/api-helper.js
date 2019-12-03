import {errorParagraph, errorSection, errorTitle, loader} from "./elements";

export function displayError(title, text) {
  loader.classList.add("preloader_invisible");
  errorSection.classList.remove("error_invisible");
  errorTitle.textContent = title;
  errorParagraph.textContent = text;
}

export function displayLoader() {
  loader.classList.remove("preloader_invisible");
  errorSection.classList.add("error_invisible");
}

export function displayContent(contentAction) {
  loader.classList.add("preloader_invisible");
  errorSection.classList.add("error_invisible");
  contentAction();
}