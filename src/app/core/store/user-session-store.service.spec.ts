import {TestBed} from '@angular/core/testing';

import {UserSessionStoreService} from './user-session-store.service';

describe('UserSessionStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSessionStoreService = TestBed.inject(
      UserSessionStoreService,
    );
    expect(service).toBeTruthy();
  });
});
