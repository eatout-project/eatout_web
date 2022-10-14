import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageTopbarComponent } from './frontpage-topbar.component';

describe('FrontpageTopbarComponent', () => {
  let component: FrontpageTopbarComponent;
  let fixture: ComponentFixture<FrontpageTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
