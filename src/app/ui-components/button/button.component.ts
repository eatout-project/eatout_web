import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from "../../businessObjects/Restaurant";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() route: string = '';
  @Input() buttonText: string = '';
  @Input() restaurant: Restaurant = {
    image: '',
    name: '',
    description: '',
    menu: {
      categories: []
    }
  };

  @Output() submit = new EventEmitter<Restaurant>();

  constructor() { }

  ngOnInit(): void {
  }

  submitSelection(restaurant: Restaurant): void {
    this.submit.emit(restaurant);
  }
}
