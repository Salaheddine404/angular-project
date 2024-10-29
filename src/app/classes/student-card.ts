
export class Etudiant {
    private _etablissement: string;
    private _nomComplet: string;
    private _matricule: string;
    private _ribPersonne: string;
  
    constructor(etablissement: string, nomComplet: string, matricule: string, ribPersonne: string) {
      this._etablissement = etablissement;
      this._nomComplet = nomComplet;
      this._matricule = matricule;
      this._ribPersonne = ribPersonne;
    }
  
    // Getter et setter pour etablissement
    public get etablissement(): string {
      return this._etablissement;
    }
  
    public set etablissement(value: string) {
      this._etablissement = value;
    }
  
    // Getter et setter pour nomComplet
    public get nomComplet(): string {
      return this._nomComplet;
    }
  
    public set nomComplet(value: string) {
      this._nomComplet = value;
    }
  
    // Getter et setter pour matricule
    public get matricule(): string {
      return this._matricule;
    }
  
    public set matricule(value: string) {
      this._matricule = value;
    }
  
    // Getter et setter pour ribPersonne
    public get ribPersonne(): string {
      return this._ribPersonne;
    }
  
    public set ribPersonne(value: string) {
      this._ribPersonne = value;
    }
  }
  