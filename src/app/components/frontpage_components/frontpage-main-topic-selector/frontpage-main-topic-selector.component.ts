import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage-main-topic-selector',
  templateUrl: './frontpage-main-topic-selector.component.html',
  styleUrls: ['./frontpage-main-topic-selector.component.scss']
})
export class FrontpageMainTopicSelectorComponent implements OnInit {

  topics: string[] = ['Indian', 'Mexican', 'Danish', 'Sri Lankan', 'American', 'Iranian', 'Russian', 'Chinese'];

  constructor() { }

  ngOnInit(): void {
  }

}
