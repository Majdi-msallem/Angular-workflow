import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  code:any
  constructor(private userService:UserService,
    private activatedRoute:ActivatedRoute) { }
ver:any
  ngOnInit(): void {
   
 //this.verifyemail({code:this.code})
 this.code = this.activatedRoute.snapshot.queryParamMap.get('code');
 console.log(this.code);
 const request = {};
    request['code'] = this.code
    
 this.userService.verifierCompte(request).subscribe(res=>{
  //this.ver=res
 console.log("verification",res)
})

  //}
  //verifyemail(code){this.activatedRoute.queryParamMap.subscribe(x => {
  //let code = x.get('code');
  //console.log(code);  
//});
  }
    //this.code = this.activatedRoute.snapshot.queryParamMap.get('code')
    
  

}
