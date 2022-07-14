import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDetailComponentComponent } from './shared-detail-component.component';

describe('SharedDetailComponentComponent', () => {
  let component: SharedDetailComponentComponent;
  let fixture: ComponentFixture<SharedDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
