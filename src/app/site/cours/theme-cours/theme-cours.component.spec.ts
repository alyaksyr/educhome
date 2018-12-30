import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCoursComponent } from './theme-cours.component';

describe('ThemeCoursComponent', () => {
  let component: ThemeCoursComponent;
  let fixture: ComponentFixture<ThemeCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
