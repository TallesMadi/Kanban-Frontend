import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivCardsComponent } from './div-cards.component';

describe('DivCardsComponent', () => {
  let component: DivCardsComponent;
  let fixture: ComponentFixture<DivCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
