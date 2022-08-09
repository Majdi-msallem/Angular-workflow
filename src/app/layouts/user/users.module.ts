import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';



@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    ProfilUserComponent,
    DetailsUserComponent
    ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule
    
  ]
})
export class UserModule { }
