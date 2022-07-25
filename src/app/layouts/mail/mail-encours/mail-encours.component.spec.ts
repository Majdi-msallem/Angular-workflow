import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailEncoursComponent } from './mail-encours.component';

describe('MailEncoursComponent', () => {
  let component: MailEncoursComponent;
  let fixture: ComponentFixture<MailEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailEncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
