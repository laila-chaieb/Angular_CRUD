import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { CompteDetailsComponent } from './components/compte-details/compte-details.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { ListeClassesComponent } from './components/liste-classes/liste-classes.component';
import { IndexComponent } from './components/index/index.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';




const routes: Routes = [
  { path: '', redirectTo: 'Comptes', pathMatch: 'full' },
  { path: 'Comptes', component: ComptesListComponent },
  { path: 'Comptes/:id', component: CompteDetailsComponent },
  { path: 'classes', component: ListeClassesComponent },
  { path: 'home', component: IndexComponent },
  { path: 'addClass', component: AddClasseComponent },
  { path: 'add', component: AddCompteComponent },
  { path: '**', redirectTo: 'home' } // Redirection vers 'home' pour les chemins inconnus
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
