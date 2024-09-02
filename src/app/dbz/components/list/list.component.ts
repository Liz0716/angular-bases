import { Component, EventEmitter, Input,Output} from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent {

  //Recibir informacion del padre
  @Input()
  public characterList: Character[]= [
    {
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    if (!id) return;

    // console.log({id});

    this.onDelete.emit(id);
  }

}
