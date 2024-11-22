import { Component } from '@angular/core';
import { Fournisseur } from './fournisseur.model';
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css'],
})
export class FournisseurComponent {
  fournisseurs: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 4, code: '4ABC4522', libelle: 'asus' },
    { idFournisseur: 50, code: 'F001', libelle: 'Fournisseur 1' },
    { idFournisseur: 120, code: 'F002', libelle: 'Fournisseur 2' },
    { idFournisseur: 80, code: 'F003', libelle: 'Fournisseur 3' },
    { idFournisseur: 50, code: '2A001', libelle: 'hp' },
    { idFournisseur: 120, code: 'F002', libelle: 'dell' },
    { idFournisseur: 80, code: '2A003', libelle: 'hp' },
    { idFournisseur: 150, code: 'A004', libelle: 'acer' }
  ];

  getColor(code: string): string {
    return code.startsWith('2A') ? 'bold' : 'normal';
  }      
  deleteFournisseur(i: number): void {
    this.fournisseurs.splice(i,1);

    //this.fournisseurs = this.fournisseurs.filter(fournisseur => fournisseur.idFournisseur !== id);
  }
  }
