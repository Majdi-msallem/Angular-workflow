import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loading=false
    loginForm=new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    })

    data : Date = new Date();
    focus;
    focus1;

    

    constructor( private router: Router) { }


    login() {
      
    
      }





      ngOnInit() {
    //     var body = document.getElementsByTagName('body')[0];
    //     body.classList.add('login-page');

    //     var navbar = document.getElementsByTagName('nav')[0];
    //     navbar.classList.add('navbar-transparent');
   
    }
    ngOnDestroy(){
        // var body = document.getElementsByTagName('body')[0];
        // body.classList.remove('login-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    }


}
