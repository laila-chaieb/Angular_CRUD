import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';
import { EditDialogCompteComponent } from '../edit-dialog-compte/edit-dialog-compte.component';
import { Classe } from 'src/app/models/classe.model';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-compte-details',
  templateUrl: './compte-details.component.html',
  styleUrls: ['./compte-details.component.css']
})
export class CompteDetailsComponent {
  constructor(private  compteService:CompteService, private activatedRoute: ActivatedRoute ,
    private router: Router,public dialog: MatDialog ,   private classeService: ClasseService,) {
      const state = this.router.getCurrentNavigation()?.extras?.state;
      this.selectedClasseColor = state?.['couleur'];

     }
     selectedClasse: Classe | undefined;
         private static readonly couleurs = [
      '#B1FA6B', '#90F88C', '#FFB86A', '#FDE919', '#78E6E1', '#5ECAFE', '#B591E6', '#EE81FE','#dddae6'
    ];
    selectedCompte: Compte = new Compte();
    classeId: number=0;
    comptes: Compte[] = [];
    selectedClasseColor: string | undefined;
    classes: Classe[] = [];
    listComptes(){
 
      this.compteService.getComptes().subscribe((res:any) =>{
        this.comptes=res
        console.log("reponse",this.comptes)
       
      }
      )
    }
 ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    const classeId = +params['id'];

    // Récupérer les détails de la classe depuis le service
    this.classeService.getClasse(classeId).subscribe(
      (classe) => {
        this.selectedClasse = classe;
        this.selectedClasseColor = this.selectedClasse ? CompteDetailsComponent.couleurs[(this.selectedClasse.id || 1) - 1] : CompteDetailsComponent.couleurs[0];

        // Charger les comptes de la classe avec l'ID correspondant
        this.listComptes(); // Utilisez fetchComptes() au lieu de loadComptesByClasseId()
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de la classe', error);
      }
    );
  });
  
}


fetchComptes(): void {
  if (this.selectedClasse && this.selectedClasse.id) {
    this.compteService.getComptesByClasseId(this.selectedClasse.id).subscribe(
      (comptes: Compte[]) => {
        this.comptes = comptes;
      },
      (error) => {
        console.error('Erreur lors du chargement des comptes', error);
      }
    );
  }
}


loadComptesByClasseId(classeId: number) {
  // Utiliser le service pour charger les comptes avec l'ID de la classe
  this.compteService.getComptesByClasseId(classeId).subscribe(
    (comptes) => {
      this.comptes = comptes;
    },
    (error) => {
      console.error('Erreur lors du chargement des comptes', error);
    }
  );
}
editCompte(id: number) {
 this.compteService.getCompte(id).subscribe(
   (compte) => {
     this.selectedCompte = compte;
         const dialogRef = this.dialog.open(EditDialogCompteComponent, {
           width: '300px',
           data: { ...this.selectedCompte } // Passez une copie des données pour éviter les problèmes de référence
         });
 
         dialogRef.afterClosed().subscribe(result => {
           if (result) {
             this.updateCompte(result);
           }
         });
       },
   (error) => {
     console.error('Error retrieving Compte details', error);
   }
 );
}
updateCompte(updatedCompte: Compte) {

 this.compteService.update(updatedCompte.id, updatedCompte).subscribe(
   (updatedCompte) => {
     console.log('Classe updated:', updatedCompte);
     // Effectuez les actions nécessaires après la mise à jour de la classe
     this.router.navigate(['/']);
   },
   (error) => {
     console.error('Error updating compte', error);
     // Affichez un message d'erreur
   }
 );
}


}
