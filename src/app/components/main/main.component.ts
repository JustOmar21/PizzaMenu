import { MenuChangeService } from './../../service/menu-change.service';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import menu from 'src/assets/pizza.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent {

  menu : any = menu;
  constructor(public MenuChange : MenuChangeService){}
  currentMenuItem = this.MenuChange.getMenu();
  }
