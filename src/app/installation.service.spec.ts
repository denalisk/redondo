import { TestBed, inject } from '@angular/core/testing';

import { InstallationService } from './installation.service';

describe('InstallationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallationService]
    });
  });

  it('should ...', inject([InstallationService], (service: InstallationService) => {
    expect(service).toBeTruthy();
  }));
});
