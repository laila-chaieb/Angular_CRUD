import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { CompteDetailsComponent } from './components/compte-details/compte-details.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { ListeClassesComponent } from './components/liste-classes/liste-classes.component';
import { IndexComponent } from './components/index/index.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';

import { DialogOverviewExampleComponent } from 'C:/Users/Lenovo/Desktop/crudCompte/src/app/components/dialog-overview-example/dialog-overview-example.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Comptes', component: ComptesListComponent },
  { path: 'Comptes/:id', component: CompteDetailsComponent },
  { path: 'classes', component: ListeClassesComponent },
  { path: 'home', component: IndexComponent },
  { path: 'addClass', component: AddClasseComponent },
  { path: 'add', component: AddCompteComponent },
  { path: 'test', component: DialogOverviewExampleComponent },
  { path: '**', redirectTo: 'home' } // Redirection vers 'home' pour les chemins inconnus
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
