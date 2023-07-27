import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';
import { EditDialogCompteComponent } from '../edit-dialog-compte/edit-dialog-compte.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.css']
})
export class ComptesListComponent {
  
  constructor(private compteService: CompteService,private activatedRoute: ActivatedRoute ,
    public dialog: MatDialog
,    private router: Router) { }

  selectedCompte: Compte = new Compte();
  comptes:any;
  isEditing: boolean = false;
  filters = {
    keyword: '',
    sortBy: 'nom'
  }
  successMessage: string = '';

  
  
  listComptes(){
 
    this.compteService.getComptes().subscribe((res:any) =>{
      this.comptes=res
      console.log("reponse",this.comptes)
     
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
  
    this.listComptes();
  }

  deleteCompte(id: number) {
    this.compteService.delete(id).subscribe(
      () => {
        
        console.log('Compte deleted successfully');
        this.router.navigate(['/']);      },
      error => {
        console.error('Error deleting Compte', error);
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
        this.router.navigate(['/']);      },
     
      (error) => {
        console.error('Error updating compte', error);
        // Affichez un message d'erreur
      }
    );
  }
    
  
   
       
    
    
    
  }
  
  
  
  


