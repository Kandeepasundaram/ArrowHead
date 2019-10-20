import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLvl0Component } from './comp-lvl0.component';

describe('CompLvl0Component', () => {
  let component: CompLvl0Component;
  let fixture: ComponentFixture<CompLvl0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLvl0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLvl0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
