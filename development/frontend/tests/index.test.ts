import { logError } from "../../functions";

describe("log errors by function", () => {
    test("TypeError", () => {
        let typeError = new TypeError("Not a string");

        expect(logError(typeError)).toEqual(typeError);
    });

    test("SyntaxError", () => {
        let syntaxError = new SyntaxError("Missed space");

        expect(logError(syntaxError)).toEqual(syntaxError);
    });
});