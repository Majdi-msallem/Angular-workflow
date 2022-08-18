import { RoleGuard } from './../../../shared/guard/roleguard';
import { TechListMailComponent } from './tech-list-mail/tech-list-mail.component';
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
  {path:'list-m',component:ListMailComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'list-mc',component:MailEncoursComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'list-mt',component:MailTraiterComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'list-mnt',component:MailNontraiterComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'list-tr1',component:ListeMailTraitementRhComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'list-tr2',component:ListeMailTraitementTechComponent,
  canActivate:[RoleGuard],data:{role:['rh'||'d_rh']}},

  {path:'listMailsForRHconnected',component:FirstTraitementComponent,
  canActivate:[RoleGuard],data:{role:'rh'}},
  {path:'listMailsForTechconnected',component:SecondTraitementComponent,
  canActivate:[RoleGuard],data:{role:'tech'}},
  {path:'listMailsForDRH',component:MailsDrhComponent,
  canActivate:[RoleGuard],data:{role:'d_rh'}},

  {path:'details-m/:idMail',component:DertailsMailComponent},

  {path:'techlistm',component:TechListMailComponent,
  canActivate:[RoleGuard],data:{role:'tech'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
