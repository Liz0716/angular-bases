import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: String;

  removeLastHero():void{
    //Remueve el ultimo elemento del arreglo y lo retorna
    this.deletedHero=this.heroNames.pop();
    // console.log({deletedHero});

  }

}
