import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCourseComponent } from './details-course.component';

describe('DetailsDiplomaComponent', () => {
  let component: DetailsCourseComponent;
  let fixture: ComponentFixture<DetailsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
