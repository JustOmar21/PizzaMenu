import { TestBed } from '@angular/core/testing';

import { MenuChangeService } from './menu-change.service';

describe('MenuChangeService', () => {
  let service: MenuChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
