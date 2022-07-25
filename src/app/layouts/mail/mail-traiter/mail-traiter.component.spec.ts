import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTraiterComponent } from './mail-traiter.component';

describe('MailTraiterComponent', () => {
  let component: MailTraiterComponent;
  let fixture: ComponentFixture<MailTraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailTraiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
