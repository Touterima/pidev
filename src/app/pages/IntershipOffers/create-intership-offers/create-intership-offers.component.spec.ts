import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntershipOffersComponent } from './create-intership-offers.component';

describe('CreateIntershipOffersComponent', () => {
  let component: CreateIntershipOffersComponent;
  let fixture: ComponentFixture<CreateIntershipOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIntershipOffersComponent]
    });
    fixture = TestBed.createComponent(CreateIntershipOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
