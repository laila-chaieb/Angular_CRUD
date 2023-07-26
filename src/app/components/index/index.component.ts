import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/models/compte.model';
import { ClasseService } from 'src/app/services/classe.service';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  comptes:any;
  classes:any;
  classe1Comptes: Compte[] = [];
  classe2Comptes: Compte[] = [];
  constructor(private  compteService:CompteService, private activatedRoute: ActivatedRoute , private router: Router) { }

  listComptes(){
 
    this.compteService.getComptes().subscribe((res:any) =>{
      this.comptes=res
      console.log("reponse",this.comptes)
     
    }
    )
  }
  ngOnInit(): void {
  
    
    this.compteService.getComptes().subscribe((comptes) => {
      this.classe1Comptes = comptes.filter(compte => compte.classe_id === 1);
      this.classe2Comptes = comptes.filter(compte => compte.classe_id === 2);  

    });
}
}