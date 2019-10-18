import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadMoreComponent } from '../../../utility.mod/read-more/components/read-more.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CourseCardComponent, ReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
