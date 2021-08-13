import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/core/room.service';



@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit, OnInit {
    rooms: Observable<Room[]>;
    source: MatTableDataSource<any>;

    columns: string[] = [
      "name",
      "date",
      "start",
      "end",
      "actions"
    ];

    actions = {
      
      delete: (id: number) => this.deleteRoom(id), 
      view: (id: number) => this.viewRoom(id), 
      edit: (id: number) => this.editRoom(id)

    };
    
    @ViewChild(MatSort)
    sort: MatSort;
    
    
    room_data = [

      {id: 1,name: "Sala 01", date: "10/10/2021", start: "10:00:00", end: "12:00:00", actions: this.actions},
      {id: 2,name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions: this.actions},
      {id: 3,name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions: this.actions},
      {id: 4,name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions: this.actions}
    ]

    constructor(private roomService: RoomService,
                private router: Router) { 
    
    }
    
    ngOnInit() {
      this.reloadData();
      this.source = new MatTableDataSource(this.room_data);
    }

    ngAfterViewInit(): void {
      this.source.sort = this.sort;
    }


    private reloadData() {

    }


    // START Actions functions
    private viewRoom(id: number): void {
      this.roomService.getRoomById(id);
    }

    private editRoom(id: number): void {
      this.router.navigateByUrl(`/rooms/${id}`);
    }

    private deleteRoom(id: number): void {
      this.roomService.deleteRoom(id);
    }
    // END Actions functions

}
