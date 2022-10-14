import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageMainBrowsingComponent } from './frontpage-main-browsing.component';

describe('FrontpageMainBrowsingComponent', () => {
  let component: FrontpageMainBrowsingComponent;
  let fixture: ComponentFixture<FrontpageMainBrowsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageMainBrowsingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontpageMainBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
