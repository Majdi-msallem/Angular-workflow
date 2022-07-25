import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-traitement',
  templateUrl: './second-traitement.component.html',
  styleUrls: ['./second-traitement.component.css']
})
export class SecondTraitementComponent implements OnInit {
    mailForTech:any
  constructor(
    private traitementservice:TraitementService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getMailEncours();
  }

  getMailEncours(){
    this.traitementservice.listeTasktrTechMailRecuPourLesTraiter().subscribe(res=>{
        this.mailForTech=res
       //console.log("les email en cours tech ",res)
    })
  }
  DetailsMail(idMail:number){
    this.router.navigate(['admin/mail/details-m',idMail])
  }
}
