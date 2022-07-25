import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-traitement',
  templateUrl: './first-traitement.component.html',
  styleUrls: ['./first-traitement.component.css']
})
export class FirstTraitementComponent implements OnInit {
    alltr:any
  constructor(
    private traitementService:TraitementService
  ) { }


  ngOnInit(): void {
    this.getAlltrByRoleRh();
  }
  
  getAlltrByRoleRh(){
    this.traitementService.gettraitementByRoleOfUserConnected().subscribe(res=>{
      this.alltr=res
      //console.log("trait",res)
  })
}

}
