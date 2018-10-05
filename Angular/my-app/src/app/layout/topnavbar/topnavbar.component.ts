import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  toggleMenu(){
    if(document.getElementsByTagName("body")[0].className.match("skin-blue sidebar-mini sidebar-open sidebar-collapse")){
      document.body.className = "skin-blue sidebar-mini sidebar-open"
    }
    if(document.getElementsByTagName("body")[0].className.match("skin-blue sidebar-mini sidebar-open")) {
      document.body.className = "skin-blue sidebar-mini sidebar-open sidebar-collapse"
    }
    if(document.getElementsByTagName("body")[0].className.match("skin-blue sidebar-mini")){
      document.body.className = "skin-blue sidebar-mini sidebar-open"
    }
  }
}
