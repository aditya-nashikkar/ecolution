import { TestBed } from '@angular/core/testing';

import { TakeActionService } from './take-action.service';

describe('TakeActionService', () => {
  let service: TakeActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
