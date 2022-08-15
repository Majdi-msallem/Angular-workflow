import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { ComponentsModule } from 'shared/components/components.module';
import {MatSelectModule} from '@angular/material/select';
import { PageComponent } from './Page/page.component';
import { AuthGuard } from 'shared/guard/auth.guard';
import { AuthInterceptor } from 'shared/guard/auth.interceptor';
import { UserService } from 'shared/service/user.service';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ComponentsModule,
    MatSelectModule,
    NgbModule,
    
    


    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageComponent,
    AuthComponent


  ],
  providers: [
    AuthGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    },
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
