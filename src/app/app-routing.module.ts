import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireEtudiantComponent } from './formulaire-etudiant/formulaire-etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: FormulaireEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
