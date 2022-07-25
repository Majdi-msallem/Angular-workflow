import { MailsDrhComponent } from './mails-drh/mails-drh.component';
import { MailNontraiterComponent } from './mail-nontraiter/mail-nontraiter.component';
import { MailTraiterComponent } from './mail-traiter/mail-traiter.component';
import { MailEncoursComponent } from './mail-encours/mail-encours.component';
import { SecondTraitementComponent } from './second-traitement/second-traitement.component';
import { FirstTraitementComponent } from './first-traitement/first-traitement.component';
import { ListMailComponent } from './list-mail/list-mail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DertailsMailComponent } from './dertails-mail/dertails-mail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-m',
    pathMatch: 'full',
  },
  {path:'list-m',component:ListMailComponent},
  {path:'list-mc',component:MailEncoursComponent},
  {path:'list-mt',component:MailTraiterComponent},
  {path:'list-mnt',component:MailNontraiterComponent},



  {path:'first-tr',component:FirstTraitementComponent},
  {path:'second-tr',component:SecondTraitementComponent},

  {path:'listMailsForDRH',component:MailsDrhComponent},

  {path:'details-m/:idMail',component:DertailsMailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
