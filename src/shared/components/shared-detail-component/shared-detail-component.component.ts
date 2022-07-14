import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-detail-component',
  templateUrl: './shared-detail-component.component.html',
  styleUrls: ['./shared-detail-component.component.css']
})
export class SharedDetailComponentComponent implements OnInit {

  constructor() { }
@Input() 
  ngOnInit(): void {
  }

}
