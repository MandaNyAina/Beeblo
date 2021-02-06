/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuFrontService } from './menu-front.service';

describe('Service: MenuFront', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuFrontService]
    });
  });

  it('should ...', inject([MenuFrontService], (service: MenuFrontService) => {
    expect(service).toBeTruthy();
  }));
});
