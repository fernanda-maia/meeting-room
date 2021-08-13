import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';


@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent
  ],

  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  exports: [
    InputTextComponent,
    InputDateComponent
  ]
})
export class FieldsModule { }
