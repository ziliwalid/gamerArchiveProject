import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCardComponent } from './adding-card.component';

describe('AddingCardComponent', () => {
  let component: AddingCardComponent;
  let fixture: ComponentFixture<AddingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingCardComponent]
    });
    fixture = TestBed.createComponent(AddingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
