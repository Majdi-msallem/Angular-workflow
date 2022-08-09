import { myToastrService } from './../../../../shared/service/toastr/toastr.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
    id:any
    detailsUser:any
    editForm:FormGroup
    startupdate=true
  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
      private toastr:myToastrService
  ) { }

  ngOnInit(): void {
      this.detail();
      this.remplirform();
      this.startupdate=true
      
  }
    detail(){
       this.id = this.activatedRoute.snapshot.params['id'];
  this.userService.getuserbyId(this.id)
  .subscribe(data => { 
    this.detailsUser =data;
   console.log("details User",this.detailsUser)
  }, error => console.log(error));
    }
 
  
  remplirform(){
    this.editForm=new FormGroup({
      userName:new FormControl(this.detailsUser?.userName),
      email:new FormControl(this.detailsUser?.email,[Validators.required,Validators.email]),
       userFName:new FormControl(this.detailsUser?.userFName),
       userLName:new FormControl(this.detailsUser?.userLName,[Validators.required]),
      
     });
     this.startupdate=false;
  }


  modifier(){
    const u={ userName:this.editForm.value.userName,
             email:this.editForm.value.email,
             userFName:this.editForm.value.userFName,
             userLName:this.editForm.value.userLName,
             id:this.detailsUser.id,
    }
    console.log("9ar3oun",u)
    if(this.editForm.valid){
        this.userService.updateUser(u).subscribe(res=>
      this.detailsUser=res
      )
      this.toastr.showNotification("top","right",2," Profile ","modifier avec succees",".......")   
      //console.log("modification",res))
      this.startupdate=true
          this.detail();
    }else{
      this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

    }
  
  
  }

}
