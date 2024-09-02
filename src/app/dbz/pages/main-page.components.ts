import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  //Agregar la importacion desde el servicio
  constructor(private dbzService: DbzService){}
    get characters(): Character[]{
      return [...this.dbzService.characters];
    }

    // Eliminar el personaje por su id
    onDeleteCharacter(id:string):void{
      this.dbzService.deleteCharacterById(id);

    }

    onNewCharacter(character: Character){
      this.dbzService.addCharacter(character);

    }

  }

