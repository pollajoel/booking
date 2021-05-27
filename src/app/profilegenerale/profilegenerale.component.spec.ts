import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilegeneraleComponent } from './profilegenerale.component';

describe('ProfilegeneraleComponent', () => {
  let component: ProfilegeneraleComponent;
  let fixture: ComponentFixture<ProfilegeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilegeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilegeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
