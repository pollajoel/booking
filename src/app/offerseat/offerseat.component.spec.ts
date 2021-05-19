import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferseatComponent } from './offerseat.component';

describe('OfferseatComponent', () => {
  let component: OfferseatComponent;
  let fixture: ComponentFixture<OfferseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
