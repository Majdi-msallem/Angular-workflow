import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  spinner=true
  
  constructor() {}
  ngOnInit() {
setTimeout(() => {  
  this.spinner=false;
}, 2000);
}
}
