import { UserService } from 'shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  user:any
  constructor(
    private userService:UserService
  ) { }


  ngOnInit(): void {
    this.getuser();
  }
  getuser(){
    this.userService.getuser().subscribe(res=>{
       this.user= res
    })
  }


}
