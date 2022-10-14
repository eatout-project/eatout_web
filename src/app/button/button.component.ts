import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Restaurant} from "../businessObjects/Restaurant";

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
    categories: []
  };

  @Output() submit = new EventEmitter<Restaurant>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitSelection(restaurant: Restaurant): void {
    this.submit.emit(restaurant);
  }
}
