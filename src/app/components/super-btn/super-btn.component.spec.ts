import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperBtnComponent } from './super-btn.component';

describe('SuperBtnComponent', () => {
  let component: SuperBtnComponent;
  let fixture: ComponentFixture<SuperBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
