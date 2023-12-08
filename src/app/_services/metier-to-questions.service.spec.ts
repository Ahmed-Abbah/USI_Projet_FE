import { TestBed } from '@angular/core/testing';

import { MetierToQuestionsService } from './metier-to-questions.service';

describe('MetierToQuestionsService', () => {
  let service: MetierToQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetierToQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
