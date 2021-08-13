import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { FieldsModule } from '../shared/components/fields/fields.module';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomCreateComponent,
    RoomUpdateComponent,
    RoomDetailsComponent,
  ],

  imports: [
    FormsModule,
    CommonModule,
    FieldsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
