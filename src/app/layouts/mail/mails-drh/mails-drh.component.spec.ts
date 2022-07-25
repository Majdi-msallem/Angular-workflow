import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsDrhComponent } from './mails-drh.component';

describe('MailsDrhComponent', () => {
  let component: MailsDrhComponent;
  let fixture: ComponentFixture<MailsDrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsDrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsDrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
