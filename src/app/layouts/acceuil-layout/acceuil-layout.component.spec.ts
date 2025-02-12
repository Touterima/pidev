import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilLayoutComponent } from './acceuil-layout.component';

describe('AcceuilLayoutComponent', () => {
  let component: AcceuilLayoutComponent;
  let fixture: ComponentFixture<AcceuilLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilLayoutComponent]
    });
    fixture = TestBed.createComponent(AcceuilLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
