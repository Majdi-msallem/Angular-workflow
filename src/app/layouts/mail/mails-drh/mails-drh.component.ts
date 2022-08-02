import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mails-drh',
  templateUrl: './mails-drh.component.html',
  styleUrls: ['./mails-drh.component.css']
})
export class MailsDrhComponent implements OnInit {
  mailsdrh:any
  constructor(
    private traitementService:TraitementService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listeMailForDRH();
  }

  listeMailForDRH(){
    this.traitementService.gettraitementByRoleOfUserConnected().subscribe(res=>{
         this.mailsdrh=res
        console.log("les email for drh ",res)
    })
  }
  DetailsMail(idMail:number){
    this.router.navigate(['admin/mail/details-m',idMail])
  }
}
