const MIN_PASSWORD_LENGTH = 8;

export type Validate = Record<string, boolean>;

export class Validator {
    #input: string;
    #type: string;

    constructor(input: string, type: string) {
        this.#input = input;
        this.#type = type;
    }

    get validate(): Record<string, boolean> {
        if (!this.#input) return {};

        if (this.#type === "email") {
            return this.#email;
        } else if (this.#type === "password") {
            return this.#password;
        } else {
            return {};
        }
    }

    get #password(): Record<string, boolean> {
        // this would remove any characters that is not a letter, digit, or space
        const nonSpecialCaseCharacters = this.#input.replace(/[^a-z\d ]/gi, "");
        const result = {
            length: this.#input.length >= MIN_PASSWORD_LENGTH,
            lowerCase: /[a-z]/.test(this.#input),
            upperCase: /[A-Z]/.test(this.#input),
            number: /\d/.test(this.#input),
            specialCharacter:
                nonSpecialCaseCharacters.length !== this.#input.length,
        };
        return result;
    }

    get #email(): Record<string, boolean> {
        const email =
            /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(
                this.#input
            );
        return { email };
    }
}
