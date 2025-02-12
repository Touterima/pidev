import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntershipOffersComponent } from './list-intership-offers.component';

describe('ListIntershipOffersComponent', () => {
  let component: ListIntershipOffersComponent;
  let fixture: ComponentFixture<ListIntershipOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListIntershipOffersComponent]
    });
    fixture = TestBed.createComponent(ListIntershipOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
