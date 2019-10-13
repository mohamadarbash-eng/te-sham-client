import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDiplomasComponent } from './all-diplomas.component';

describe('AllCoursesComponent', () => {
  let component: AllDiplomasComponent;
  let fixture: ComponentFixture<AllDiplomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDiplomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDiplomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
