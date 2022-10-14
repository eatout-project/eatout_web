import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage-topbar',
  templateUrl: './frontpage-topbar.component.html',
  styleUrls: ['./frontpage-topbar.component.scss']
})
export class FrontpageTopbarComponent implements OnInit {
  path: string = "assets/Logo/png/logoColor.png";
  alttext: string="first image"

  constructor() { }

  ngOnInit(): void {
  }

}
