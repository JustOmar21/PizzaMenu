import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild("closeCategories") closeCat : ElementRef | undefined;
  setMenuItem(key:string)
  {
    this.menuChange.setMenu(key);
    console.log(this.closeCat?.nativeElement);

    this.closeCat?.nativeElement.click();

  }
}
