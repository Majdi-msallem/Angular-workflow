import { UserService } from 'shared/service/user.service';
import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dertails-mail',
  templateUrl: './dertails-mail.component.html',
  styleUrls: ['./dertails-mail.component.css']
})
export class DertailsMailComponent implements OnInit {
    oneMail:any
    idMail:any
    idAtt:any
    detMail:any[]=[]
    showtr=false
    showdettr=false
    note:any
    etat:any
    userName:any
    listusertech:any
    dropdownSettings:IDropdownSettings={};
    vr:boolean
  constructor(
    private mailService:MailService,
    private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private traitementService:TraitementService
  ) { }

  ngOnInit(    ): void {
    this.userTechList();
    this. testrole();
    this.idMail = this.activatedRoute.snapshot.params['idMail'];
    this.mailService.GetMailById(this.idMail)
    .subscribe(data => { 
      this.oneMail =data;
     console.log("detailsMail",this.oneMail)
    }, error => console.log(error));
}
affichetr(){
      this.showtr=true;
}
afficherdetailstr(){
  this.showdettr=true;
}
downloadpf(){
  //this.mailService.downloadPdf(this.oneMail.idMail,this.oneMail.attachments.idAtt)
  console.log(this.oneMail.attachments[0].idAtt)
  window.open(this.mailService.url+"src/"+this.oneMail.idMail+"/"+this.oneMail.attachments[0].idAtt)
} 

//rh
refusertr(){
 this.traitementService.refusedRhTr(this.idMail,2,this.note,this.etat,this.userName).subscribe();
}
accpettr(){
  this.traitementService.refusedRhTr(this.idMail,1,this.note,this.etat,this.userName).subscribe();
 }
 userTechList(){
  this.userservice.getalltechuser().subscribe(res=>{
      this.listusertech=res
      //console.log("tech user",res)
  })
}

//tech 
accpetedTechTr(){
  this.traitementService.accpetedTechTr(this.idMail,this.note,this.etat).subscribe();
}
refusedTechTr(){
  this.traitementService.accpetedTechTr(this.idMail,this.note,this.etat).subscribe();
}
  testrole(){

    this.userservice.getuser().subscribe(
      (user)=> {  console.log("path",user)
      
      user.role.forEach(element => {
        console.log("element",element)
      if(element.roleName=="tech")
      this.vr=true
    
    })})
    
    
    }

  }





