import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown' 
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [ AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    
  ]
})
export class UserModule { }
