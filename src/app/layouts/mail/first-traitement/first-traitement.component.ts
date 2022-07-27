import { MailService } from './../../../../shared/service/mailService/mail.service';
import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-traitement',
  templateUrl: './first-traitement.component.html',
  styleUrls: ['./first-traitement.component.css']
})
export class FirstTraitementComponent implements OnInit {
  mailsrh:any
  constructor(
    private mailService:MailService
  ) { }


  ngOnInit(): void {
      this.listemailsPourRH();
  }
  
 
  listemailsPourRH(){
    this.mailService.listeMailTR1BYUserConnected().subscribe(res=>{
         this.mailsrh=res
        console.log("les email for rh ",res)
    })
  }

}
