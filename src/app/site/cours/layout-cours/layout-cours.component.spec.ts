import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCoursComponent } from './layout-cours.component';

describe('LayoutCoursComponent', () => {
  let component: LayoutCoursComponent;
  let fixture: ComponentFixture<LayoutCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
