import { Injectable } from '@angular/core';
import menu from "src/assets/pizza.json";
@Injectable({
  providedIn: 'root'
})
export class MenuChangeService {

  currentMenu : string = Object.keys(menu)[0];
  public setMenu(currentMenu : string){
    this.currentMenu = currentMenu;
  }

  public getMenu(){
    return this.currentMenu;
  }
  constructor() { }
}
