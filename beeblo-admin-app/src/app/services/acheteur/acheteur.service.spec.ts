/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcheteurService } from './acheteur.service';

describe('Service: Acheteur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcheteurService]
    });
  });

  it('should ...', inject([AcheteurService], (service: AcheteurService) => {
    expect(service).toBeTruthy();
  }));
});
