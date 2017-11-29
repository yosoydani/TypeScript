/// <reference path="./validation.ts" />
namespace Validation {

    const numberRegexp: RegExp = /^[0-9]+$/;
    export class ZipCodeValidator implements IStringValidator {
        isAcceptable(s: string):boolean {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
