import { Validator } from "./validate";

describe("Validate", () => {
    it("should validate the password input", () => {
        const result = new Validator("Password", "password").validate;

        expect(result.length).toBe(true);
        expect(result.lowerCase).toBe(true);
        expect(result.upperCase).toBe(true);
        expect(result.number).toBe(false);
        expect(result.specialCharacter).toBe(false);
    });

    it("should validate the email input", () => {
        const result = new Validator("names@email.de", "email").validate;

        expect(result.email).toBe(true);
    });
});
