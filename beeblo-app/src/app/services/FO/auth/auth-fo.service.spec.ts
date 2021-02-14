/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AuthFoService } from './auth-fo.service';

describe('Service: AuthFo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFoService]
    });
  });

  it('should ...', inject([AuthFoService], (service: AuthFoService) => {
    expect(service).toBeTruthy();
  }));
});
