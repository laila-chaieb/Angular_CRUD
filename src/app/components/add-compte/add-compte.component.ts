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
    id: 0,
    libele: '',
    code: '',
    description: '',
    classe_id: 0,
  };
  submitted = false;
  successMessage: string = '';

  constructor(private CompteService: CompteService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      // Récupérer l'ID de la classe depuis les "queryParams" de l'URL
      this._activatedRoute.queryParams.subscribe(params => {
        const classe_id = +params['classe_id']; // Assurez-vous que le type de classe_id correspond au backend (number)
        // Utiliser l'ID de la classe pour remplir automatiquement le champ "classe_id"
        this.Compte.classe_id = classe_id;
      });
  
      // Si vous avez également besoin de récupérer l'ID du compte pour la mise à jour, utilisez le code suivant
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
              console.log('Une erreur s\'est produite lors de la récupération du Compte :', error);
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
    console.log('Contenu du compte avant soumission :', this.Compte);
  
    // Récupérer l'ID de la classe associée au compte (par exemple, depuis un formulaire)
    const classeId = 1; // Remplacez cette valeur par l'ID de la classe appropriée
  
    // Remplir automatiquement le champ "classe_id" dans l'objet "Compte"
    this.Compte.classe_id = classeId;
  
    // Enregistrer le compte avec le champ "classe_id" correctement rempli
    this.CompteService.create(this.Compte).subscribe(
      (res) => {
        console.log('Compte créé:', res);
        // Rediriger vers la page d'index après l'enregistrement
        this._router.navigate(['/Comptes']);
      },
      (error) => {
        console.error('Erreur lors de la création du compte', error);
      }
    );
  }
  
}  
  



  


