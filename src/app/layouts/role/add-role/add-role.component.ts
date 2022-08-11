import { RolesService } from './../../../../shared/service/roleService/roles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { role } from 'shared/models/Role';
import { myToastrService } from 'shared/service/toastr/toastr.service';

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
    private rolesService:RolesService,
    private toastr:myToastrService

  ) { }

  ngOnInit(): void {
    this.formValue=this.fb.group
    ({
      roleName:['',Validators.required],
      roleDescription:['',Validators.required]
    })
  }
  get f(){
    return this.formValue.controls;
  }
  ajouterNouveauRole(){
    this.Role.roleName=this.formValue.value.roleName;
    this.Role.roleDescription=this.formValue.value.roleDescription;
    if(this.formValue.valid)    {
    this.rolesService.addRole(this.Role)
    .subscribe(res=>{
      console.log("new role",res);
      this.toastr.showNotification("top","right",2,"Role ","Ajouter avec succees",".......")   
         this.formValue.reset();
    },
      err=>{
      }
    )}else{
      this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

    }
  }

 

}
