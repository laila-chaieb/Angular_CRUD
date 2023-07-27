import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})


export class AddCompteComponent implements OnInit {
  comptes:any;
  Compte: Compte = {
   
    classe_id: 'CLASSE X',
      libele: '',
      code:'',
      description:''
  };
  submitted = false;
  successMessage: string = '';

  constructor(private CompteService: CompteService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     // Récupérer l'ID de la classe depuis les paramètres de l'URL
     this._activatedRoute.queryParams.subscribe(params => {
      const classe_id = params['classe_id'];
      // Utiliser l'ID de la classe pour remplir automatiquement le champ "classe_id"
      this.Compte.classe_id = classe_id;
    });
  
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const idParam = this._activatedRoute.snapshot.paramMap.get('id');
      if (idParam !== null) {
        const id = +idParam;
        this.CompteService.getCompte(id).subscribe(
          data => {
            this.Compte = data;
          },
          error => {
            console.log('Une erreur s\'est produite lors de la récupération de la Compte :', error);
            // Gérer l'erreur (afficher un message d'erreur, rediriger, etc.)
          }
        );
      }
    }
  }
  listComptes(){
 
    this.CompteService.getComptes().subscribe((res:any) =>{
      this.comptes=res
      console.log("reponse",this.comptes)
     
    }
    )
  }

  saveCompte() {
    // Enregistrer le compte avec le champ "classe_id" rempli automatiquement
    this.CompteService.create(this.Compte).subscribe(
      (res) => {
        console.log('Compte créé:', res);
        // Rediriger vers la page d'index après l'enregistrement
        this._router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de la création du compte', error);
      }
    );
  }
  }

  



  


