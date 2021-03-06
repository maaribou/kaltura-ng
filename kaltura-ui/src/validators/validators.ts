import {AbstractControl, ValidationErrors} from "@angular/forms";

// accepts http/https/ftp
export const urlRegex = new RegExp("^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$","i");

// accepts http/https
export  const urlHttpRegex = new RegExp("^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$","i");
export const ipRegex = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$","i");
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", [Validators.ip, Validators.required])
 * ```
 *
 */
export class KalturaValidators {

    /**
     * Validator that requires controls to have a value represented as IP (value not required).
     */
    static ip(control: AbstractControl): ValidationErrors|null {
        if (!control.value || !control.value.length) return null;
        return ipRegex.test(control.value) ? null : {'ip': true};
    }

    /**
     * Validator that requires controls to have a value represented as URL (value not required).
     */
    static url(control: AbstractControl): ValidationErrors|null {
        if (!control.value || !control.value.length) return null;
        return urlRegex.test(control.value) ? null : {'url': true};
    }

    /**
     * Validator that requires controls to have a value represented as URL (value not required).
     */
    static urlHttp(control: AbstractControl): ValidationErrors|null {
        if (!control.value || !control.value.length) return null;
        return urlHttpRegex.test(control.value) ? null : {'url': true};
    }


    /**
     * Url validation
     */
    static isUrlValid(url: string): boolean {
        return urlRegex.test(url);
    }

}