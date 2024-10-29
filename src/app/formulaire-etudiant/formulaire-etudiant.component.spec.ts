import { Component } from '@angular/core';
import { Etudiant } from '../../etudiant';

@Component({
  selector: 'app-formulaire-etudiant',
  templateUrl: './formulaire-etudiant.component.html',
  styleUrls: ['./formulaire-etudiant.component.css']
})
export class FormulaireEtudiantComponent {
  etudiant: Etudiant;

  constructor() {
    // Initialiser l'objet étudiant
    this.etudiant = new Etudiant('', '', '', '');
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    console.log("Formulaire soumis : ", this.etudiant);
    // Ajouter la logique pour transférer les données à l'autre composant ici
  }
}
