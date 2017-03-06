import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBuyResultComponent } from './course-buy-result.component';

describe('CourseBuyResultComponent', () => {
  let component: CourseBuyResultComponent;
  let fixture: ComponentFixture<CourseBuyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBuyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBuyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
