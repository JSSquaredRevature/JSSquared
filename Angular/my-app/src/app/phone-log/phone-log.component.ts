import { Component, OnInit } from '@angular/core';
import {PhoneLog} from '../phone-log';
import {PhoneLogService} from '../phone-log.service';
import { Location, Time } from '@angular/common';
@Component({
  selector: 'app-phone-log',
  templateUrl: './phone-log.component.html',
  styleUrls: ['./phone-log.component.scss']
})
export class PhoneLogComponent implements OnInit {

  phoneLogs:PhoneLog[];
  selectedPhoneLog:PhoneLog;
  showInsertForm: boolean;
  phoneLog:PhoneLog[];
  constructor(private phoneLogService:PhoneLogService,
    private location: Location) { }

  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getPhoneLogs();
  }
  insertButtonSelected(): void {
    this.showInsertForm = true;
    this.selectedPhoneLog = null;
  }

  phoneLogSelected(phoneLog: PhoneLog): void {
    this.showInsertForm = false;
    this.selectedPhoneLog = phoneLog;
  }
  getPhoneLogs():void {
    this.phoneLogService.getPhoneLogs().subscribe(PhoneLog=>this.phoneLogs=PhoneLog);
  }

  save(): void {
    this.phoneLogService.updatePhoneLog(this.selectedPhoneLog)
      .subscribe(() => this.goBack());
  }

  insert(id: number, caseid: number, time: Date, duration: string, caller: string): void {
    this.phoneLogService.addPhoneLog({ id, caseid,caller,time, duration} as PhoneLog)
      .subscribe(PhoneLog => {
        //this.phoneLog.push(PhoneLog);
      });
  }
  
  cancel(): void {
    this.selectedPhoneLog = null;
    this.showInsertForm = false;
  }

  goBack(): void {
    this.location.back();
  }
}
