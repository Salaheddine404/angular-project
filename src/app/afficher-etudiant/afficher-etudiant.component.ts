import { Component, Input } from '@angular/core';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-afficher-etudiant',
  templateUrl: './afficher-etudiant.component.html',
  styleUrls: ['./afficher-etudiant.component.css']
})
export class AfficherEtudiantComponent {
  @Input() etudiant: Etudiant | null = null;
}
