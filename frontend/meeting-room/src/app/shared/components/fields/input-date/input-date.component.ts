import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { FieldValidatorService } from '../fields-validator.service';


@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: [
    './input-date.component.css',
    '../fields.component.css',
]
})
export class InputDateComponent {
  minDate: Date;

  @Input() fieldName: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validator: FieldValidatorService) {
    this.minDate = new Date();
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}