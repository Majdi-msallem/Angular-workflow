import { UserService } from 'shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
    allusers:any
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getAllusers();
  }
  getAllusers(){
    this.userService.getalluser().subscribe(res=>{
       this.allusers=res
      // console.log("les users",res)
    })
  }
}
