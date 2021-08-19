import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/core/room.service';
import { Alert } from 'src/app/shared/models/alert';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit, OnInit {
    source: MatTableDataSource<any>;

    columns: string[] = [
      "room",
      "name",
      "date",
      "startHour",
      "endHour",
      "actions"
    ];

    actions = {
      delete: (id: number, room: Room) => this.deleteRoom(id, room), 
      edit: (id: number) => this.editRoom(id)

    };
    
    @ViewChild(MatSort)
    sort: MatSort;

    room_data: Array<Object> = []

    constructor(public dialog: MatDialog,
                private roomService: RoomService,
                private router: Router) { 
    
    }
    
    ngOnInit(): void {
      this.getData();

      this.source = new MatTableDataSource(this.room_data);
    }

    ngAfterViewInit(): void {
      this.source.sort = this.sort;
    }


    private getData() {
      this.roomService.getRooms().subscribe(
        (r: Room[]) => {
            this.room_data.push(...r);

            this.source = new MatTableDataSource(this.room_data);
            this.source.sort = this.sort;

        }
      )
    }


    // START Actions functions
    private editRoom(id: number): void {
      this.router.navigateByUrl(`/rooms/${id}`);
    }

    private deleteRoom(id: number, room: Room): void {
      const description = `${room.room}
      ${room.name}
      ${room.date}
      Start Hour: ${room.startHour}
      End Hour: ${room.endHour}
      `
      const alert = {
        data: {
          title: `Warning!
          Check the datas before delete`,
          description

        } as Alert
      };

      const dialogRef = this.dialog.open(AlertComponent, alert);
      dialogRef.afterClosed().subscribe((opt: boolean) => {
          if(opt) {
            this.roomService.deleteRoom(id)
                .subscribe(() => {
                  this.room_data = [];
                  this.getData();
                });
          }
      })
      
    }
    // END Actions functions

}
