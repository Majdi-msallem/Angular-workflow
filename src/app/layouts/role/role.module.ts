import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { DetailsRoleComponent } from './details-role/details-role.component';


@NgModule({
  declarations: [ListeRoleComponent, AddRoleComponent, DetailsRoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class RoleModule { }
