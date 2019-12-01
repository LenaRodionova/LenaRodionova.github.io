export default class InputValidator {

    validateNotEmpty(text, onSuccess, onFail) {
        if (text !== null && text !== "") {
            onSuccess();
        } else {
           onFail();
        }
    }

}