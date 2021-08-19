import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Room } from 'src/app/shared/models/room';
import { Alert } from 'src/app/shared/models/alert';
import { RoomService } from 'src/app/core/room.service';
import { ErrorResponse } from 'src/app/shared/models/error-response';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { FieldValidatorService } from 'src/app/shared/components/fields/fields-validator.service';


@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  id: number;
  room: Room;
  schedule: FormGroup;

  constructor(public validator: FieldValidatorService,
              public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private roomService: RoomService) {

  }

  ngOnInit(): void {
    this.createForm();
    this.id = this.activatedRoute.snapshot.params["id"];

    if(this.id) {
      this.roomService
          .getRoomById(this.id).subscribe((room: Room) => {
              this.createForm(room);
          },
            (_) => this.router.navigateByUrl('/rooms/schedule')
          );
    }
  }

  // START Form Actions
  sendData(): void {
    this.schedule.markAllAsTouched();
    let room = this.formatDatas();
    
    if(!this.schedule.invalid) {
      
      if(this.id) {
        room.id = this.id;
        this.updateRoom(room);

      } else {
        this.saveRoom(room);  
      }

    }

  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }
  // END Form Actions


  public createForm(room?: Room): void {
    this.schedule = this.formBuilder.group({
      room: [room?.room || "", [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      name: [room?.name || "", [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      ],

      date: [room?.date || new Date(), [Validators.required]],
      startHour: [room?.startHour || "00:00:00", [Validators.required]],
      endHour: [room?.endHour || "00:00:00", [Validators.required]]
    })

  }

  private saveRoom(room: Room) {
    this.roomService.save(room).subscribe(() => {
      const alert = {
        data: {
            title: "Room Saved",
            description: "The datas was saved!",
            okBtn: "Continue",
            hasCancelBtn: false

        } as Alert
      }

      const dialogRef = this.dialog.open(AlertComponent, alert);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('/rooms'));
  },
    (e: ErrorResponse) => {
      const alert = {
        data: {
          title: "Something went wrong!",
          description: e.message,
          okBtn: "Continue",
          hasCancelBtn: false  

        } as Alert
      }

      const dialogRef = this.dialog.open(AlertComponent, alert);
    })
  }

  private updateRoom(room: Room) {
      this.roomService.update(room, this.id).subscribe(() => {
          const alert = {
            data: {
                title: "Room Saved",
                description: "The datas was updated!",
                okBtn: "Continue",
                hasCancelBtn: false

            } as Alert
          }

          const dialogRef = this.dialog.open(AlertComponent, alert);
          dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('/rooms'));
      },
        (e: ErrorResponse) => {
          const alert = {
            data: {
              title: "Something went wrong!",
              description: e.message,
              okBtn: "Continue",
              hasCancelBtn: false  

            } as Alert
          }

          const dialogRef = this.dialog.open(AlertComponent, alert);
        }
      )
  }

  private formatDatas(): Room {
      let room = this.schedule.getRawValue();

      let date = new Date(Date.parse(room.date));
      date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000 );

      room.date = date.toLocaleString('pt-BR', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });

      if(room.date.includes('/')) {
        room.date = room.date.split('/').reverse().join('-');
      }

      if(room.startHour.length < 8) {
        room.startHour += ":00";
      }

      if(room.endHour.length < 8) {
        room.endHour += ":00";
      }


      return room as Room;
  }

}
