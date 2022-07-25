import { ProfilUserComponent } from './profil-user/profil-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-u',
    pathMatch: 'full',
  },
  {path:'add',component:AddUserComponent},
  {path:'list-u',component:ListUsersComponent},
  {path:'profil-u',component:ProfilUserComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
