import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauCoursComponent } from './niveau-cours.component';

describe('NiveauCoursComponent', () => {
  let component: NiveauCoursComponent;
  let fixture: ComponentFixture<NiveauCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
