import { MailService } from './../../../../shared/service/mailService/mail.service';
import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-mail-traitement-tech',
  templateUrl: './liste-mail-traitement-tech.component.html',
  styleUrls: ['./liste-mail-traitement-tech.component.css']
})
export class ListeMailTraitementTechComponent implements OnInit {
  allt2:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  constructor(
    private mailService:MailService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAlltraitementTech({ page: 0, size: 5,recherche:this.key });
  }

  getAlltraitementTech(request){
    this.mailService.listTR2(request).subscribe(res=>{
     this.allt2=res  ['content'];
     this.collectionSize=res['totalElements'];
 })
}
DetailsMail(idMail:number){
  this.router.navigate(['admin/mail/details-m',idMail])
}
nextPage(event:any){
  const request = {};
  request['page'] = event-1
  request['size'] = this.pageSize
  request['recherche']=this.key
  console.log(request)
  this.getAlltraitementTech(request);
}


search(event){
  this.key=event
  const request = {};
  request['page'] = 0
  request['size'] = this.pageSize
  this.page=0
  request['recherche']=this.key
  console.log(request)
  this.getAlltraitementTech(request);

}

}
