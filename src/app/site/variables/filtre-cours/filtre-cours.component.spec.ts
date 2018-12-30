import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreCoursComponent } from './filtre-cours.component';

describe('FiltreCoursComponent', () => {
  let component: FiltreCoursComponent;
  let fixture: ComponentFixture<FiltreCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
