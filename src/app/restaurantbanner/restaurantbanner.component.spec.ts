import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantbannerComponent } from './restaurantbanner.component';

describe('RestaurantbannerComponent', () => {
  let component: RestaurantbannerComponent;
  let fixture: ComponentFixture<RestaurantbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
