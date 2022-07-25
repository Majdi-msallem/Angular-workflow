import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RolesService } from 'shared/service/roleService/roles.service';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit {
  allrole:any
  idRole:number

  constructor(
    private rolesService:RolesService,
    private router:Router

  ) { }

  ngOnInit(): void {
      this.getAllRole();
  }
  getAllRole(){
    this.rolesService.getAllrole().subscribe(res=>{
        this.allrole=res
    })
  }
  deleteRole(row:any){
    this.rolesService.deleteRole(row.idRole).subscribe(res=>{
      alert("role supprimer")
      this.getAllRole();
    })
  }
  ajouterRole(){
    this.router.navigate(['admin/role/add-r'])
  }
}
