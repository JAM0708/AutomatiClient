import { TestBed, async, inject } from '@angular/core/testing';

import { TokenAuthGuard } from './token-auth.guard';

describe('TokenAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenAuthGuard]
    });
  });

  it('should ...', inject([TokenAuthGuard], (guard: TokenAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
