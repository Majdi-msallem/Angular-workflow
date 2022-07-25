import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTraitementComponent } from './second-traitement.component';

describe('SecondTraitementComponent', () => {
  let component: SecondTraitementComponent;
  let fixture: ComponentFixture<SecondTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
