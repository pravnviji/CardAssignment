import { HttpRequestService } from "./http-request.service";
import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Type } from "@angular/core";
import { Logger } from "../../core/logger.service";

describe("http-request-service", () => {
  let mockHttpRequestService: HttpRequestService;
  let http: HttpClient;
  let logger: Logger;
  let httpMock: HttpTestingController;
  let responseData: any;
  const mockResponseData = "unittesting";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    http = TestBed.get(HttpClient);
    logger = TestBed.get(Logger);
    httpMock = TestBed.get(
      HttpTestingController as Type<HttpTestingController>
    );
  });
  beforeEach(() => {
    mockHttpRequestService = new HttpRequestService(http, logger);
  });
  afterEach(() => {
    httpMock.verify();
  });

  test("should create an instance", () => {
    expect(
      new HttpRequestService(TestBed.get(HttpClient), TestBed.get(Logger))
    ).toBeTruthy();
  });

  test("should call and verify the get method", () => {
    mockHttpRequestService
      .get("toto")
      .toPromise()
      .then((response) => {
        responseData = response;
      });

    // Assert
    const req = httpMock.expectOne("toto");
    req.flush(mockResponseData);
  });

  test("should call error handle the get method", () => {
    const mockData: string = "Test incident data";
    const errorMock = { status: 404, statusText: "Not Found" };
    console.log("Get error handling");
    const mockErrorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: {},
      status: 500,
      url: "mocktest",
      statusText: "Bad Request",
    });
    mockHttpRequestService.get("mocktest").subscribe(
      (resp) => {
        console.log("handleError on create: expected error response:");
        console.log(JSON.stringify(resp));
        new Error("handleError: expected error...");
      },
      (error) => {
        console.log("Inside the GET");
        expect(mockHttpRequestService.handleError).toHaveBeenCalledWith(
          error,
          "GET",
          "mocktest"
        );
      }
    );

    const req: TestRequest = httpMock.expectOne({
      url: "mocktest",
    });
    expect(req.request.method).toBe("GET");
    req.flush(mockErrorResponse);
  });

  test("handleError :: should throwback error for https methods", () => {
    const mockErrorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: {},
      status: 500,
      url: "mocktest",
      statusText: "Bad Request",
    });

    const req = mockHttpRequestService.handleError(
      mockErrorResponse,
      "GET",
      "mocktest"
    );

    expect(req).toThrowError;
  });
});
