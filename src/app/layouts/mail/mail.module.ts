import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { ListMailComponent } from './list-mail/list-mail.component';
import { DertailsMailComponent } from './dertails-mail/dertails-mail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FirstTraitementComponent } from './first-traitement/first-traitement.component';
import { SecondTraitementComponent } from './second-traitement/second-traitement.component';
import { MailEncoursComponent } from './mail-encours/mail-encours.component';
import { MailTraiterComponent } from './mail-traiter/mail-traiter.component';
import { MailNontraiterComponent } from './mail-nontraiter/mail-nontraiter.component';
import { MailsDrhComponent } from './mails-drh/mails-drh.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({

  declarations: [
      ListMailComponent,
      DertailsMailComponent,
      FirstTraitementComponent,
      SecondTraitementComponent,
      MailEncoursComponent,
      MailTraiterComponent,
      MailNontraiterComponent,
      MailsDrhComponent,
    ],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,


    MatPaginatorModule

  ]
})
export class MailModule { }
