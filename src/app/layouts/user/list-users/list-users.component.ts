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
    pageSize=5
    page=0
    collectionSize:number
    key:string=""

  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getAllusers({ page: 0, size: 5,recherche:this.key });
  }
  getAllusers(request){
    this.userService.getalluser(request).subscribe(res=>{
      console.log("liste",res)
       this.allusers= res['content'];
      // console.log("les users",res)
      this.collectionSize=res['totalElements'];
    })
  }

  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    console.log(request)
    this.getAllusers(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.getAllusers(request);
  
  }

  deleteuser(user:any){
    this.userService.deleteUser(user.id).subscribe(res=>{
      alert("user supprimer")
      this.getAllusers({ page: 0, size: 5,recherche:this.key });
    })
  }
}
