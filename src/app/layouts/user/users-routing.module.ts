import { DetailsUserComponent } from './details-user/details-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';
import { RoleGuard } from 'shared/guard/roleguard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-u',
    pathMatch: 'full',
  },
  {path:'add',component:AddUserComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},
  {path:'list-u',component:ListUsersComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},
  {path:'profil-u',component:ProfilUserComponent},
  {path:'details/:id',component:DetailsUserComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}}



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
