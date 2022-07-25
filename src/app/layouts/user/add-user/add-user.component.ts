import { UserService } from 'shared/service/user.service';
import { RolesService } from './../../../../shared/service/roleService/roles.service';
import { role } from './../../../../shared/models/Role';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  dropdownSettings:IDropdownSettings={};
  Listrole:role[]=[]
  userForm:FormGroup;
  showdetail:boolean




  constructor(
    private rolesService:RolesService,
    private userService:UserService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {

    this.userForm= this.fb.group({
      email:[],
      userName:[],
      userLName:[],
      userFName:[],
      password:[],
      role:[]
    })

    this.dropdownSettings = {     
      idField: 'idRole',
      textField: 'roleName',
    };
    this.rolesService.getAllrole().subscribe(
      x=>this.Listrole=x,
      e=>console.log(e),
      )
  
  }

  addUser(){
    console.log("formulaire",this.userForm.value)
    this.userService.adduser(this.userForm.value).subscribe(
      x=>{this.userForm.reset(),
        this.showdetail=false
    
      }),
      e=>console.log(e)
    }
}


