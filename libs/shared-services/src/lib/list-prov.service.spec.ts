import { TestBed } from '@angular/core/testing';

import { ListProvService } from './list-prov.service';

describe('ListProvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProvService = TestBed.get(ListProvService);
    expect(service).toBeTruthy();
  });
});
