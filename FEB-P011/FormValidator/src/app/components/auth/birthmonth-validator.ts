import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createBirthmonthValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const realMonth = /^(0?[1-9]|1[0-2])$/.test(value);

        const validMonth = realMonth;

        return !validMonth ? { birthmonth: true } : null;

    }
}