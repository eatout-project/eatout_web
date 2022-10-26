import {Component, Input, OnInit} from '@angular/core';
import {CategoryItem} from "../../businessObjects/CategoryItem";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: CategoryItem = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
