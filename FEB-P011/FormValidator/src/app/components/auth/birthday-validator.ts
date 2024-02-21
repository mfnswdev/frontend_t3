import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createBirthdayValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const realDate = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(value);

        const validDate = realDate;

        return !validDate ? { birthday : true } : null;

    }
}

