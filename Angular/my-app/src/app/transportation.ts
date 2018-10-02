import { Timestamp } from "rxjs";
import { Time } from "@angular/common";

export class Transportation {
    id: number;
    socialworkerid: number;
    caseid: number;
    time: Timestamp<Time>;
    location: string;
}