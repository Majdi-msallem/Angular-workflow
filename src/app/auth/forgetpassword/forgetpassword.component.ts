import { UserService } from 'shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  fromrp:FormGroup
  a:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fromrp=this.fb.group
    ({
      email:['',Validators.required],
    })
   
  }
  sendEmail(){
    const request = {};
   request['email'] = this.fromrp.value.email
   
      console.log("const",request)
    this.userService.sendEmailForResetPassword(request).subscribe(
      //res=>{
        //res=request ['email'];
        //console.log("email to send",)

    //}
    )
  }
 
}
