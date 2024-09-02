import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from './dbz/pages/main-page.components';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './dbz/components/list/list.component';
import { AddCharacterComponent } from './dbz/components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListComponent,
    AddCharacterComponent



  ],
  imports: [
    BrowserModule,
    FormsModule


    // CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
