import { async, TestBed } from '@angular/core/testing';
import { MultilevelcompsModule } from './multilevelcomps.module';

describe('MultilevelcompsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MultilevelcompsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MultilevelcompsModule).toBeDefined();
  });
});
