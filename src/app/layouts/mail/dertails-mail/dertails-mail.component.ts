import { UserService } from 'shared/service/user.service';
import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { myToastrService } from 'shared/service/toastr/toastr.service';


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
    meet:any
    listusertech:any
    dropdownSettings:IDropdownSettings={};
    vr:boolean
    vr2:boolean
    vr3:boolean

  constructor(
    private mailService:MailService,
    private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private traitementService:TraitementService,
    private router:Router,
    private toastr:myToastrService

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
refusertr(form:NgForm){
  this.meet=null;
  this.userName=null;
  //console.log("taba3 khlifa",form.value)
 this.traitementService.refusedRhTr(this.idMail,2,form.value.note,form.value.etat,this.userName,this.meet).subscribe(
  res=>{
    form.resetForm
  }
 );
 form.resetForm
}
accpettr(form:NgForm){
   //console.log("taba3 khlifa",form.value)
   if(form.valid)    {
  this.traitementService.accpetedRhTr(this.idMail,1,form.value.note,form.value.etat,form.value.userName,form.value.meet).subscribe(
    res=>{
      this.toastr.showNotification("top","right",2,"traitement Rh ","traité avec succees",".......")   
     // Formdrh.disabled;
    }  
  );
  }else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

  }
 
}
 userTechList(){
  this.userservice.getalltechuser().subscribe(res=>{
      this.listusertech=res
      //console.log("tech user",res)
  })
}

//tech 
accpetedTechTr(Formtech:NgForm){
   //console.log("taba3 khlifa",Formtech.value)
   if(Formtech.valid)    {
  this.traitementService.accpetedTechTr(this.idMail,Formtech.value.note,Formtech.value.etat).subscribe(
    res=>{
      this.toastr.showNotification("top","right",2,"traitement technique ","traité avec succees",".......")   
     // Formdrh.disabled;
    }  
  );
  }else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

  }
}
refusedTechTr(Formtech:NgForm){
  if(Formtech.valid)    {
  this.traitementService.accpetedTechTr(this.idMail,Formtech.value.note,Formtech.value.etat).subscribe(
    res=>{
      this.toastr.showNotification("top","right",2,"traitement technique ","traité avec succees",".......")   
    }  
  );
  }else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

  }
}
//drh
accpeteddrhTr(Formdrh:NgForm){
  //console.log("taba3 khlifa",Formdrh.value)
  if(Formdrh.valid)    {
  this.traitementService.accpeteddrhTr(this.idMail,2,Formdrh.value.note,Formdrh.value.etat).subscribe(
    res=>{
      this.toastr.showNotification("top","right",2,"traitement final ","traité avec succees",".......")   
     // Formdrh.disabled;
    }  
  );
  }else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

  }
}
refuseddrhTr(Formdrh:NgForm){
  if(Formdrh.valid)    {
  this.traitementService.accpeteddrhTr(this.idMail,1,Formdrh.value.note,Formdrh.value.etat).subscribe(
    res=>{
      this.toastr.showNotification("top","right",2,"traitement final ","traité avec succees",".......")   
     // Formdrh.disabled;
    }   
  );}else{
    this.toastr.showNotification("top","right",3,"erreur:","verifier vos champs",".......")

  }
}
  testrole(){
    this.userservice.getuser().subscribe(
      (user)=> {  
      user.role.forEach(element => {
        //console.log("element",element.roleName)
      if(element.roleName=="tech")
      this.vr=true
      if(element.roleName=="rh" || element.roleName=="d_rh")
      this.vr2=true
      if( element.roleName=="d_rh")
      this.vr3=true
    })})
    }

  }





