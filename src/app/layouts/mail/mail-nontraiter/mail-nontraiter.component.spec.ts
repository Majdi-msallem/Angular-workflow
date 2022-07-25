import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailNontraiterComponent } from './mail-nontraiter.component';

describe('MailNontraiterComponent', () => {
  let component: MailNontraiterComponent;
  let fixture: ComponentFixture<MailNontraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailNontraiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailNontraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
