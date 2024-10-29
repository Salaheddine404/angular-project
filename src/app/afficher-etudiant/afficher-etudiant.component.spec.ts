import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEtudiantComponent } from './afficher-etudiant.component';

describe('AfficherEtudiantComponent', () => {
  let component: AfficherEtudiantComponent;
  let fixture: ComponentFixture<AfficherEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
