import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereCoursComponent } from './matiere-cours.component';

describe('MatiereCoursComponent', () => {
  let component: MatiereCoursComponent;
  let fixture: ComponentFixture<MatiereCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
