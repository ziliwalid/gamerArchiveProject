import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAbyssArchivesComponent } from './game-abyss-archives.component';

describe('GameAbyssArchivesComponent', () => {
  let component: GameAbyssArchivesComponent;
  let fixture: ComponentFixture<GameAbyssArchivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameAbyssArchivesComponent]
    });
    fixture = TestBed.createComponent(GameAbyssArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
