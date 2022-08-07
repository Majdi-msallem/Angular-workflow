import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechListMailComponent } from './tech-list-mail.component';

describe('TechListMailComponent', () => {
  let component: TechListMailComponent;
  let fixture: ComponentFixture<TechListMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechListMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechListMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
