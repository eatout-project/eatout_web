import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../businessObjects/Category";
import {MenuItem} from "../businessObjects/MenuItem";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
