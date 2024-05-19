import { Component } from '@angular/core';
import { MenuChangeService } from 'src/app/service/menu-change.service';
import menu from "src/assets/pizza.json";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  keys = Object.keys(menu);
menu: any = menu;
  constructor(public menuChange : MenuChangeService){

  }

  setMenuItem(key:string)
  {
    this.menuChange.setMenu(key);
    console.log(this.menuChange.currentMenu);

  }
}
