import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { 

  }

  getRooms() {
    alert("Get Room Works!");
  }

  getRoomById(id: number) {
    alert("Get Room" + id + "Works!");
  }

  deleteRoom(id: number) {
    alert("Delete" + id + "Room Works!");
  }
}
