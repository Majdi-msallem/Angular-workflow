import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  constructor() { }

  ngOnInit(): void {
  }

}
