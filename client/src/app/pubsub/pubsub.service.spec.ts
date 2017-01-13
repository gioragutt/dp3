/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PubsubService } from './pubsub.service';

describe('PubsubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubsubService]
    });
  });

  it('should ...', inject([PubsubService], (service: PubsubService) => {
    expect(service).toBeTruthy();
  }));
});
