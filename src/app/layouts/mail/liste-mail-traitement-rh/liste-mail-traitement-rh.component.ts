import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-mail-traitement-rh',
  templateUrl: './liste-mail-traitement-rh.component.html',
  styleUrls: ['./liste-mail-traitement-rh.component.css']
})
export class ListeMailTraitementRhComponent implements OnInit {
  allt1:any
  constructor(
    private traitementService:TraitementService
  ) { }

  ngOnInit(): void {
this.getAlltraitementRH();

  }
  getAlltraitementRH(){
       this.traitementService.listTR1().subscribe(res=>{
        this.allt1=res
    })
}
}
