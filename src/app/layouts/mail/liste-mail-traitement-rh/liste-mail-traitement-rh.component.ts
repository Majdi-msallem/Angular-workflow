import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';
import { MailService } from 'shared/service/mailService/mail.service';

@Component({
  selector: 'app-liste-mail-traitement-rh',
  templateUrl: './liste-mail-traitement-rh.component.html',
  styleUrls: ['./liste-mail-traitement-rh.component.css']
})
export class ListeMailTraitementRhComponent implements OnInit {
  allt1:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
 
  constructor(
    private mailService:MailService
  ) { }

  ngOnInit(): void {
this.getAlltraitementRH({ page: 0, size: 5,recherche:this.key });

  }
  getAlltraitementRH(request){
       this.mailService.listTR1(request).subscribe(res=>{
        this.allt1=res ['content'];
        this.collectionSize=res['totalElements'];
    })
}
nextPage(event:any){
  const request = {};
  request['page'] = event-1
  request['size'] = this.pageSize
  request['recherche']=this.key
  console.log(request)
  this.getAlltraitementRH(request);
}


search(event){
  this.key=event
  const request = {};
  request['page'] = 0
  request['size'] = this.pageSize
  this.page=0
  request['recherche']=this.key
  console.log(request)
  this.getAlltraitementRH(request);

}


}
