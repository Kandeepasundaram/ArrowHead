import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrwlcontainerComponent } from './nrwlcontainer.component';

describe('NrwlcontainerComponent', () => {
  let component: NrwlcontainerComponent;
  let fixture: ComponentFixture<NrwlcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrwlcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrwlcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
