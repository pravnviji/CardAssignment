import { TestBed, getTestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { CardService } from "./card.service";

import { Logger } from "src/app/core/logger.service";
import { of } from "rxjs";

class MockLoggerService {
  log() {
    return of(true);
  }
  debug() {
    return of(true);
  }
}

describe("CardService", () => {
  let serviceTest: CardService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: httpMock, useClass: HttpTestingController },
        { provide: Logger, useClass: MockLoggerService },
      ],
    });
    injector = getTestBed();
    httpMock = TestBed.get(HttpTestingController);
    serviceTest = injector.get(CardService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test("should be created", () => {
    expect(serviceTest).toBeTruthy();
  });
});
