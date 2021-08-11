import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



const actions = ["delete", "view"];
const ROOM_DATA = [
  {name: "Sala 01", date: "10/10/2021", start: "10:00:00", end: "12:00:00", actions},
  {name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions},
  {name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions},
  {name: "Sala 02", date: "10/09/2021", start: "12:00:00", end: "19:00:00", actions}
]

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit, OnInit {
  columns: string[] = [
    "name",
    "date",
    "start",
    "end",
    "actions"
  ];

  source = new MatTableDataSource(ROOM_DATA);

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.source.sort = this.sort;
  }


}
