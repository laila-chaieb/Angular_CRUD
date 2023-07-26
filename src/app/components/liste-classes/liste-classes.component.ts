import { Component, OnInit,Inject } from '@angular/core';
import { Classe } from 'src/app/models/classe.model';
import { ClasseService } from 'src/app/services/classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {  EditDialogComponentComponent } from '../edit-dialog/edit-dialog-component.component';




@Component({
  selector: 'app-liste-classes',
  templateUrl: './liste-classes.component.html',
  styleUrls: ['./liste-classes.component.css'],
})
export class ListeClassesComponent implements OnInit {
  constructor(private classeService: ClasseService,
    private activatedRoute: ActivatedRoute , private router: Router,
    public dialog: MatDialog
   
 ) { }
  selectedClasse: Classe = new Classe();
  classes:any;
  isEditing: boolean = false;
  filters = {
    keyword: '',
    sortBy: 'nom'
  }

  successMessage: string = '';

 
  
  listClasses(){
 
    this.classeService.getClasses().subscribe((res:any) =>{
      this.classes=res
      console.log("reponse",this.classes)
     
    }
    )
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const successMessage = params['success'];
      if (successMessage) {
        console.log(successMessage);
        // Affichez le message de succès dans votre template ou effectuez les actions nécessaires
      }
    });
  
    this.listClasses();
  }

  deleteClasse(id: number) {
    this.classeService.delete(id).subscribe(
      () => {
        console.log('Classe deleted successfully');
        this.listClasses(); // Actualisez la liste des classes après la suppression
      },
      error => {
        console.error('Error deleting classe', error);
      }
    );
  }
  editClasse(id: number) {
    this.classeService.getClasse(id).subscribe(
      (classe) => {
        this.selectedClasse = classe;
        const dialogRef = this.dialog.open(EditDialogComponentComponent, {
          width: '300px',
          data: { ...this.selectedClasse } // Passez une copie des données pour éviter les problèmes de référence
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.updateClasse(result);
          }
        });
      },
      (error) => {
        console.error('Error retrieving classe details', error);
      }
    );
  }

  updateClasse(updatedClasse: Classe) {
    this.classeService.update(updatedClasse.id, updatedClasse).subscribe(
      (updatedClasse) => {
        console.log('Classe updated:', updatedClasse);
        // Effectuez les actions nécessaires après la mise à jour de la classe
      },
      (error) => {
        console.error('Error updating classe', error);
        // Affichez un message d'erreur
      }
    );
  }
  
  
  
}

