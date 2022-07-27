import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMailTraitementRhComponent } from './liste-mail-traitement-rh.component';

describe('ListeMailTraitementRhComponent', () => {
  let component: ListeMailTraitementRhComponent;
  let fixture: ComponentFixture<ListeMailTraitementRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMailTraitementRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMailTraitementRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
