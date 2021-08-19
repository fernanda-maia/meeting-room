import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { NotFoundScreenComponent } from './not-found-screen/not-found-screen.component';



@NgModule({
  declarations: [
    HomeScreenComponent,
    ContactScreenComponent,
    NotFoundScreenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ViewsModule { }
