import { Time } from "@angular/common";


export interface Room {
    id?: number;
    room: string;
    name: string;
    date: string;
    startHour: string;
    endHour: string;
    active: boolean;
    
}
