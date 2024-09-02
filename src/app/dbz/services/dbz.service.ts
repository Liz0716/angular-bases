// a-service+tab
import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import  { v4 as uuid } from 'uuid';

// Asi se llamara
// uuid()


@Injectable({providedIn: 'root'

})


export class DbzService {

  public characters: Character[] = [
    {
    id:  uuid(),
    name: 'Krillin',
    power: 1000,
  },
  {
    id:  uuid(),
    name: 'Goku',
    power: 9500,
  },
  {
    id:  uuid(),
    name: 'Vegeta',
    power: 7500,
  }];


// desestruturarlo desde aqui
addCharacter(character: Character): void{
  // console.log('MainPage');
  // console.log(character);
  // para agregarlo con el id
  const newCharacter: Character ={
    // ...para tomar todos los elementos cuando son muchos
    ...character,id: uuid(),
  }

  // Agregar
  this.characters.push(newCharacter)
}

  // Eliminar
// onDeleteCharacter(index:number):void{
//   // console.log(character);
//   this.characters.splice(index,1);

// }

deleteCharacterById(id: string){
  // El filter barre cada uno de los elementos del arreglo y retorna los que cumpla la condicion
  this.characters = this.characters.filter(character => character.id !== id);
}
}
