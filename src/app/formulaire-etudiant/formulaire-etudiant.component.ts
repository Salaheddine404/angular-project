import { Component, EventEmitter, Output } from '@angular/core';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-formulaire-etudiant',
  templateUrl: './formulaire-etudiant.component.html',
  styleUrls: ['./formulaire-etudiant.component.css']
})
export class FormulaireEtudiantComponent {
  etudiant: Etudiant;

  @Output() etudiantCree = new EventEmitter<Etudiant>();

  constructor() {
    this.etudiant = new Etudiant('', '', '', '');
  }

  onSubmit() {
    console.log("Formulaire soumis : ", this.etudiant);
    this.etudiantCree.emit(this.etudiant); // Émet les données de l’étudiant vers le composant parent
  }
}
