export default class InputManager {
  constructor(onClick, submitButtonClass, inputBlock, inputValidator) {
    this._inputBlock = inputBlock;
    this._validator = inputValidator;
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