import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Logger } from "../../core/logger.service";

@Injectable({
  providedIn: "root",
})
export class HttpRequestService {
  private header: HttpHeaders = new HttpHeaders({ responseType: "JSON" });

  constructor(private http: HttpClient, private logger: Logger) {}

  /**
   * Gets http request service
   * @param url
   * @param [header]
   * @returns get
   */
  public get(path: string, header?: object): Observable<Object> {
    this.logger.debug(`HttpRequestService`, `get`);
    this.logger.debug(`HttpRequestService`, path);
    header = header ?? this.header;

    return this.http.get(path, header).pipe(
      retry(3),
      catchError((err) => this.handleError(err, `GET`, path))
    );
  }

  handleError(error: any, method: string, url: string) {
    this.logger.debug(
      `:: Exception in ${method} ==> ${url}`,
      `Error =>`,
      error
    );
    return throwError(() => error);
  }
}
