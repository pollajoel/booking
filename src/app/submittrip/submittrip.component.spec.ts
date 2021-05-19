import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittripComponent } from './submittrip.component';

describe('SubmittripComponent', () => {
  let component: SubmittripComponent;
  let fixture: ComponentFixture<SubmittripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
