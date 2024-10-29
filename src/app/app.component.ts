import { Component } from '@angular/core';
import { Etudiant } from './etudiant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  etudiantAffiche: Etudiant | null = null;

  afficherEtudiant(etudiant: Etudiant) {
    this.etudiantAffiche = etudiant;
  }
}
