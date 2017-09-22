import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ChienService } from '../shared/chien/chien.service';

@Component({
  selector: 'app-chien',
  templateUrl: './chien.component.html',
  styleUrls: ['./chien.component.css']
})
export class ChienComponent implements OnInit {
  listeChien:Chien[];
  //Ne pas oublier d'initialiser le chien du formulaire
  nouveauChien:Chien={
    nom:'',
    race:'',
    dateNaissance:null
  };

  constructor(private chienService:ChienService) { }

  ngOnInit() {
    this.chienService.getAllChien().then((chiens) => this.listeChien = chiens);
  }

  ajouter() {
    this.chienService.addChien(this.nouveauChien)
    .then((chien) => this.listeChien.push(chien));
  }

  supprimer(id:number) {
    this.chienService.removeChien(id)
    .then(() => this.ngOnInit());
}
}
