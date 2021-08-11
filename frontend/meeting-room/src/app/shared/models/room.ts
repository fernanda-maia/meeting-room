import { Time } from "@angular/common";


export interface Room {
    id: number;
    name: string;
    date: Date;
    startHour: Time;
    endHour: Time;
    active: boolean;
    
}
