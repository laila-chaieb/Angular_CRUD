import { Component } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.css']
})
export class ComptesListComponent {
  
  constructor(private compteService: CompteService) { }

}
