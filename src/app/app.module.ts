import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour [(ngModel)]
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormulaireEtudiantComponent } from './formulaire-etudiant/formulaire-etudiant.component';
import { AfficherEtudiantComponent } from './afficher-etudiant/afficher-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireEtudiantComponent,
    AfficherEtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
