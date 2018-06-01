import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { POKEMON } from '../mock-pokemon';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    pokemon = POKEMON;

  constructor() { }

  ngOnInit() {
  }


}
