import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePreviewComponent } from './module-preview.component';

describe('ModulePreviewComponent', () => {
  let component: ModulePreviewComponent;
  let fixture: ComponentFixture<ModulePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
