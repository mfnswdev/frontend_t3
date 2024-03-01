import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {
    values: {},
    statusChanges: []
  };

  constructor() { }

  setForm(form: FormGroup) {
    form.valueChanges.subscribe(values => {
      this.formData.values = values;
    });

    form.statusChanges.subscribe(status => {
      this.formData.statusChanges.push(status);
    });
  }

  getFormData() {
    return this.formData;
  }

  resetFormData() {
    this.formData = {
      values: {},
      statusChanges: []
    };
  }
}
