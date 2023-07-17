import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})


export class AddCompteComponent implements OnInit {

  Compte: Compte = {
   
      type_class: 'CLASSE X',
      libele: '',
      code:'',
      description:''
  };
  submitted = false;

  constructor(private CompteService: CompteService) { }

  ngOnInit(): void {
  }

  saveCompte(): void {
    const data = {
      nom: this.Compte.nom,
      type_class: this.Compte.type_class
    };

    this.CompteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCompte(): void {
    this.submitted = false;
    this.Compte = {
     
      type_class: '',
      libele: '',
      code:'',
      description:''
    };
  }


  

}
