import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantpageComponent } from './restaurantpage.component';

describe('RestaurantpageComponent', () => {
  let component: RestaurantpageComponent;
  let fixture: ComponentFixture<RestaurantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
