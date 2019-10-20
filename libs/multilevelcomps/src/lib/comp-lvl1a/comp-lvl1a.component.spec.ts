import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLvl1aComponent } from './comp-lvl1a.component';

describe('CompLvl1aComponent', () => {
  let component: CompLvl1aComponent;
  let fixture: ComponentFixture<CompLvl1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLvl1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLvl1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
