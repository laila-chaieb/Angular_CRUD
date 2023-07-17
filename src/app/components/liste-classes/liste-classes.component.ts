import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/models/classe.model';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-liste-classes',
  templateUrl: './liste-classes.component.html',
  styleUrls: ['./liste-classes.component.css'],
})
export class ListeClassesComponent implements OnInit {
  constructor(private classeService: ClasseService) { }

  classes: Classe[] = [];
  filters = {
    keyword: '',
    sortBy: 'nom'
  }
  ngOnInit(): void {
    this.listClasses();
  }

  deleteClasse(id: number) {
    this.classeService.deleteClasse(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listClasses();
      }
    )
  }

  listClasses() {
    this.classeService.getClasses().subscribe(
      data => this.classes = data.filter((classe) =>
        (classe.classeNum && classe.classeNum.toLowerCase().includes(this.filters.keyword.toLowerCase())) ||
        (classe.nom && classe.nom.toLowerCase().includes(this.filters.keyword.toLowerCase()))
      )
    )
  }
  
}

