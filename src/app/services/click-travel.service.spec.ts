/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClickTravelService } from './click-travel.service';

describe('Service: ClickTravel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickTravelService]
    });
  });

  it('should ...', inject([ClickTravelService], (service: ClickTravelService) => {
    expect(service).toBeTruthy();
  }));
});
