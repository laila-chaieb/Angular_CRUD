import { Component ,OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  Router ,ActivatedRoute} from '@angular/router';
import { Classe } from 'src/app/models//classe.model';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {
  Classe: Classe = {
    nom: '',
    classeNum: '',
    description: ''
  };
  text = new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]')]);

  getErrorMessage() {
    if (this.text.hasError('required')) {
      return 'Champ Obligatoire *';
    }

    return this.text.hasError('text') ? 'Veuillez entrer une valeur valide' : '';
  }
  submitted = false;
  constructor(private classeService: ClasseService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

              classe: Classe = new Classe();

              ngOnInit(): void {
                const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
                if (isIdPresent) {
                  const idParam = this._activatedRoute.snapshot.paramMap.get('id');
                  if (idParam !== null) {
                    const id = +idParam;
                    this.classeService.getClasse(id).subscribe(
                      data => {
                        this.classe = data;
                      },
                      error => {
                        console.log('Une erreur s\'est produite lors de la récupération de la classe :', error);
                        // Gérer l'erreur (afficher un message d'erreur, rediriger, etc.)
                      }
                    );
                  }
                }
              }
              
             saveClasse() {
       this.classeService.saveClasse(this.classe).subscribe( 
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/Classes");
      }
    )
  }
  deleteClasse(id: number) {
    this.classeService.deleteClasse(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/Classes');
      }
    )
  }
}
