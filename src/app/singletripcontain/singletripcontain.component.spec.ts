import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletripcontainComponent } from './singletripcontain.component';

describe('SingletripcontainComponent', () => {
  let component: SingletripcontainComponent;
  let fixture: ComponentFixture<SingletripcontainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletripcontainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletripcontainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
