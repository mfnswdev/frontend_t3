import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function createStrongPassword(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const upperCaracter = /[A-Z]+/.test(value);
        const lowerCaracter = /[a-z]+/.test(value);
        const specialCaracter = /[\W_]+/.test(value);

        const validPassword = upperCaracter && lowerCaracter && specialCaracter;

        return !validPassword ? { strongPassword : true } : null;
    }
}