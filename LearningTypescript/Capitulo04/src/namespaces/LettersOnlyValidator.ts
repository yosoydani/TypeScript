/// <reference path="./validation.ts" />
namespace Validation {

    const lettersRegexp: RegExp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements IStringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }
}