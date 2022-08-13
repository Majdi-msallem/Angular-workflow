import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    VerifyEmailComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class AuthModule { }
