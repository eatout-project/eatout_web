import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDescriptionAreaComponent } from './restaurant-description-area.component';

describe('RestaurantDescriptionAreaComponent', () => {
  let component: RestaurantDescriptionAreaComponent;
  let fixture: ComponentFixture<RestaurantDescriptionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDescriptionAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDescriptionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
