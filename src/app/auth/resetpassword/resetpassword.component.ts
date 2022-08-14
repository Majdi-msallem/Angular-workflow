import { userModel } from 'shared/models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'shared/service/user.service';
import { myToastrService } from 'shared/service/toastr/toastr.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  token:any
  frp:FormGroup

  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private fb: FormBuilder,
    private toastr:myToastrService
  ) { }

  ngOnInit(): void {
 
    this.frp=this.fb.group
    ({
      Password:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    })
   
    this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
      
  }
  get f(){
    return this.frp.controls;
  }
  ResetPassword(){
    if(this.frp.valid)    {
    this.userService.Resetpassword(this.token,this.frp.value.Password).subscribe();
    this.toastr.showNotification("top","right",2,"utilisateur ","Ajouté avec succees",".......")   

  }else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

    }
}
}
