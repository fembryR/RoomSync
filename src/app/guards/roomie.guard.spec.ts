import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roomieGuard } from './roomie.guard';

describe('roomieGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roomieGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
