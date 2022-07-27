import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMailTraitementTechComponent } from './liste-mail-traitement-tech.component';

describe('ListeMailTraitementTechComponent', () => {
  let component: ListeMailTraitementTechComponent;
  let fixture: ComponentFixture<ListeMailTraitementTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMailTraitementTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMailTraitementTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
