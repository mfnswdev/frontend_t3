import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createBirthyearValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // Se o valor estiver vazio, não há erro de validação
    }

    // Validar se o ano está no formato correto (YY ou YYYY)
    const validYear = /^(19[2-9]\d|20\d{2})$/.test(value);

    if (!validYear) {
      return { invalidYear: true }; // Se o ano não estiver no formato correto, retorna um erro
    }

    // Calcular a idade com base no ano de nascimento
    const birthYear = parseInt(value.substring(0, 4)); // Obter os primeiros quatro dígitos (ano)
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // Validar se a idade é menor que 18 anos
    if (age < 18) {
      return { underAge: true }; // Se a idade for menor que 18 anos, retorna um erro
    }

    return null; // Se passar por todas as verificações, não há erro de validação
  };
}
