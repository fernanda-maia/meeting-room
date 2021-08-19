import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Room } from '../shared/models/room';



const baseURL = 'http://localhost:8080/api/rooms'

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) { 

  }

  save(room: Room): Observable<Room> {
    return this.httpClient.post<Room>(baseURL, room);
  }

  update(room: Room, id: number): Observable<Room> {
    return this.httpClient.put<Room>(`${baseURL}/${id}`, room);
  }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(baseURL);
  }

  getRoomById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`${baseURL}/${id}`);
  }

  deleteRoom(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${baseURL}/${id}`);
  }

}
