import { MailComponent } from './mail/mail.component';
import { UsersComponent } from './user/users.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../app/layouts/dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { AuthGuard } from 'shared/guard/auth.guard';
export const AdminLayoutRoutes: Routes = [
    
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./dashboard/dashboard.module').then(x=>x.DashboardModule),
      

      
      }]},
      
   
      {
        path: 'role',
        component: RoleComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./role/role.module').then(x=>x.RoleModule),
      
      }]},

      {
        path: 'user',
        component: UsersComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./user/users.module').then(x=>x.UserModule),
      
      }]},
      {
        path: 'mail',
        component: MailComponent,
        children: [
            {
          path: '',
          loadChildren: () => import('./mail/mail.module').then(x=>x.MailModule),
      
      }]}
];
