import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTraitementComponent } from './first-traitement.component';

describe('FirstTraitementComponent', () => {
  let component: FirstTraitementComponent;
  let fixture: ComponentFixture<FirstTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
