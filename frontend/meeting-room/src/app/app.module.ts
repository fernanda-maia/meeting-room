import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { MainComponent } from './shared/components/layout/main/main.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { NotFoundScreenComponent } from './views/not-found-screen/not-found-screen.component';
import { ContactScreenComponent } from './views/contact-screen/contact-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomDetailsComponent,
    RoomListComponent,
    RoomUpdateComponent,
    RoomCreateComponent,
    NavbarComponent,
    MainComponent,
    HomeScreenComponent,
    NotFoundScreenComponent,
    ContactScreenComponent
  ],
  imports: [
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
