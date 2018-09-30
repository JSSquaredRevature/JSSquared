import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SocialWorker } from '../social-worker';
import { SocialWorkerService }  from '../social-worker.service';

@Component({
  selector: 'app-social-worker',
  templateUrl: './social-worker.component.html',
  styleUrls: ['./social-worker.component.css']
})
export class SocialWorkerComponent implements OnInit {

  socialWorkers: SocialWorker[];

  constructor(
    private socialWorkerService: SocialWorkerService,
    private location: Location) { }

    ngOnInit(): void {
      document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getCases();
    }
   
    getCases(): void {
      this.socialWorkerService.getCases()
        .subscribe(SocialWorker=> this.socialWorkers = SocialWorker);
    }
   
    goBack(): void {
      this.location.back();
    }

}
