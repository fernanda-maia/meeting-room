import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoomModule } from './room/room.module';
import { FieldsModule } from './shared/components/fields/fields.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/layout/main/main.component';
import { HomeScreenComponent } from './shared/views/home-screen/home-screen.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { ContactScreenComponent } from './shared/views/contact-screen/contact-screen.component';
import { NotFoundScreenComponent } from './shared/views/not-found-screen/not-found-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HomeScreenComponent,
    ContactScreenComponent,
    NotFoundScreenComponent
  ],
  imports: [
    RoomModule,
    FieldsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
