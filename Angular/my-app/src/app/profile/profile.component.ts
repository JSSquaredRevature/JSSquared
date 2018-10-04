import { Component, OnInit } from '@angular/core';

import { SocialWorker } from '../social-worker';
import { SocialWorkerService }  from '../social-worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  socialWorker: SocialWorker;

  constructor(private socialWorkerService: SocialWorkerService) { }

  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
    this.getSocialWorker();
  }

  getSocialWorker(): void {
    this.socialWorkerService.getSocialWorker()
      .subscribe(SocialWorker=> this.socialWorker = SocialWorker);
  }   

}
