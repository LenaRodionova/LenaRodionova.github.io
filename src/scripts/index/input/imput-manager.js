import InputBlock from "./input-block";
import InputValidator from "./input-validator";

export default class InputManager {
  constructor(onClick, submitButtonClass) {
    this._inputBlock = new InputBlock();
    this._validator = new InputValidator();
    this._onClick = onClick;
    this._submitButtonClass = submitButtonClass;
  }

  handleInput(event) {
    event.preventDefault();
    if (event.type === "input") {
      this._validator.validateNotEmpty(
        event.target.value,
        this._inputBlock.hideValidationError,
        this._inputBlock.showValidationError)
    }
    if (event.type === "click" && event.target.classList.contains(this._submitButtonClass)) {
      this._onClick(event);
    }

  }

}