import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DertailsMailComponent } from './dertails-mail.component';

describe('DertailsMailComponent', () => {
  let component: DertailsMailComponent;
  let fixture: ComponentFixture<DertailsMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DertailsMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DertailsMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
