import { DetailsRoleComponent } from './details-role/details-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleGuard } from 'shared/guard/roleguard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-r',
    pathMatch: 'full',
  },
  {path:'add-r',component:AddRoleComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},
  {path:'list-r',component:ListeRoleComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},
  {path:'details-r',component:DetailsRoleComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
