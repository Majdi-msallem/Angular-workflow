import { RolesService } from './../../../../shared/service/roleService/roles.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { role } from 'shared/models/Role';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  formValue:FormGroup
  Role:role=new role();
  constructor(
    private fb:FormBuilder,
    private rolesService:RolesService
  ) { }

  ngOnInit(): void {
    this.formValue=this.fb.group
    ({
      roleName:[],
      roleDescription:[]
    })
  }

  ajouterNouveauRole(){
    this.Role.roleName=this.formValue.value.roleName;
    this.Role.roleDescription=this.formValue.value.roleDescription;

    this.rolesService.addRole(this.Role)
    .subscribe(res=>{
      console.log("new role",res);
      alert("Role ajouter avec succees")
      this.formValue.reset();
    },
      err=>{
        alert("erreur lors de  lajout du role ")
      }
    )
  }

 

}
