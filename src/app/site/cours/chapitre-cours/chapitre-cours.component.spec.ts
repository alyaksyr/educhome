import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreCoursComponent } from './chapitre-cours.component';

describe('ChapitreCoursComponent', () => {
  let component: ChapitreCoursComponent;
  let fixture: ComponentFixture<ChapitreCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapitreCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
