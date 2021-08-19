import { NgModule } from '@angular/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { RoomModule } from './room/room.module';
import { ViewsModule } from './shared/views/views.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { FieldsModule } from './shared/components/fields/fields.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/layout/main/main.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    RoomModule,
    ViewsModule,
    FieldsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    MatMomentDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true }
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        display: {
          dateInput: 'YYYY-MM-DD',
        }
      }
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
