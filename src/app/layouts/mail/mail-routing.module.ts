import { ListeMailTraitementTechComponent } from './liste-mail-traitement-tech/liste-mail-traitement-tech.component';
import { ListeMailTraitementRhComponent } from './liste-mail-traitement-rh/liste-mail-traitement-rh.component';
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

  {path:'list-tr1',component:ListeMailTraitementRhComponent},
  {path:'list-tr2',component:ListeMailTraitementTechComponent},





  {path:'listMailsForRHconnected',component:FirstTraitementComponent},
  {path:'listMailsForTechconnected',component:SecondTraitementComponent},
  {path:'listMailsForDRH',component:MailsDrhComponent},

  {path:'details-m/:idMail',component:DertailsMailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
