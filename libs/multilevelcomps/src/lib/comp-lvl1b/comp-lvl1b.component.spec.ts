import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLvl1bComponent } from './comp-lvl1b.component';

describe('CompLvl1bComponent', () => {
  let component: CompLvl1bComponent;
  let fixture: ComponentFixture<CompLvl1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLvl1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLvl1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
