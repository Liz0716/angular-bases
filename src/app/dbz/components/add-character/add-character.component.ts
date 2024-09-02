import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Emitir el personje, informacion del padre
  @Output()
  // Aqui vamos emitir el personaje, instancia de emisor de eventos
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // objecto
  public Character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{
    // debugger;
    console.log(this.Character);
    // no aceptamos algo que no tenga nombre
    if(this.Character.name.length === 0) return;

    this.onNewCharacter.emit(this.Character);

    // para devolver los valores
    this.Character = {name : '', power: 0}

  }

}
