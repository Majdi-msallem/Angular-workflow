import { DetailsRoleComponent } from './details-role/details-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-r',
    pathMatch: 'full',
  },
  {path:'add-r',component:AddRoleComponent},
  {path:'list-r',component:ListeRoleComponent},
  {path:'details-r',component:DetailsRoleComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
