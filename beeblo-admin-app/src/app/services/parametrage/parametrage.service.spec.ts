/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParametrageService } from './parametrage.service';

describe('Service: Parametrage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParametrageService]
    });
  });

  it('should ...', inject([ParametrageService], (service: ParametrageService) => {
    expect(service).toBeTruthy();
  }));
});
