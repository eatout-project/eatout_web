import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageMainTopicSelectorComponent } from './frontpage-main-topic-selector.component';

describe('FrontpageMainTopicSelectorComponent', () => {
  let component: FrontpageMainTopicSelectorComponent;
  let fixture: ComponentFixture<FrontpageMainTopicSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageMainTopicSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageMainTopicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
