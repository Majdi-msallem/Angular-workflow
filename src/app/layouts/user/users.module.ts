import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';



@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    ProfilUserComponent
    ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class UserModule { }
