import { NgModule } from '@angular/core';
import { IndexComponent } from './components/index/index.component';
import { AddClasseComponent } from './components/add-classe/add-classe.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { CompteDetailsComponent } from './components/compte-details/compte-details.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeClassesComponent } from './components/liste-classes/liste-classes.component';
import { FormsModule } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    AddCompteComponent,
    AddClasseComponent,
    IndexComponent,
    CompteDetailsComponent,
    ComptesListComponent,
    ListeClassesComponent,
   
  ],

  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
ReactiveFormsModule , 
MatFormFieldModule,
MatInputModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
