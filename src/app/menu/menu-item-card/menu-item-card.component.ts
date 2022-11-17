import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../objects/businessObjects/Category";

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss']
})
export class MenuItemCardComponent implements OnInit {

  @Input() category: Category = {
    title: '',
    items: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
