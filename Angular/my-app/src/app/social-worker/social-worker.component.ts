import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SocialWorker } from '../social-worker';
import { SocialWorkerService }  from '../social-worker.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-social-worker',
  templateUrl: './social-worker.component.html',
  styleUrls: ['./social-worker.component.css']
})
export class SocialWorkerComponent implements OnInit {

  socialWorkers: SocialWorker[];

  constructor(
    private socialWorkerService: SocialWorkerService,
    private location: Location,
    private auth:AuthService) { }

    ngOnInit(): void {
      this.getSocialWorkers();
      document.body.className = "hold-transition skin-blue sidebar-mini";
    }
   
    getSocialWorkers(): void {
      this.socialWorkerService.getSocialWorkers()
        .subscribe(SocialWorker=> this.socialWorkers = SocialWorker);
    }

    goBack(): void {
      this.location.back();
    }

}
