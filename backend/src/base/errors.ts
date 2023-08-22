export class HttpError {
    readonly #message: object;
    readonly #code: number;
    constructor(message: object, code: number) {
        this.#message = message;
        this.#code = code;
    }

    get code() {
        return this.#code;
    }

    get message() {
        return this.#message
    }
}