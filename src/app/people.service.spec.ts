import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpModule } from "@angular/http";

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [PeopleService]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
