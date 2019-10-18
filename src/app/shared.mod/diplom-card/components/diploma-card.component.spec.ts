import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaCardComponent } from './diploma-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadMoreComponent } from '../../../utility.mod/read-more/components/read-more.component';

describe('DiplomCardComponent', () => {
  let component: DiplomaCardComponent;
  let fixture: ComponentFixture<DiplomaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DiplomaCardComponent, ReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaCardComponent);
    component = fixture.componentInstance;
    component.diploma = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
