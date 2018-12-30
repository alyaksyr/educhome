import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfsSidebarComponent } from './profs-sidebar.component';

describe('ProfsSidebarComponent', () => {
  let component: ProfsSidebarComponent;
  let fixture: ComponentFixture<ProfsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
