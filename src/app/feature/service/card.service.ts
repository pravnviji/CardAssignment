import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpRequestService } from "src/app/core/http/http-request.service";
import { Logger } from "src/app/core/logger.service";
import { TCardDetails } from ".";

@Injectable({
  providedIn: "root",
})
export class CardService {
  public cardDataSubject: BehaviorSubject<TCardDetails[]> = new BehaviorSubject<
    TCardDetails[]
  >([]);
  public cardData$: Observable<TCardDetails[]> | undefined =
    this.cardDataSubject.asObservable();

  constructor(private http: HttpRequestService, private logger: Logger) {}

  getCardData = (): Observable<TCardDetails> => {
    this.logger.debug("-------- getCardData ----------");
    return this.http
      .get("./assets/cards.json")
      .pipe(map((result) => this.mapCardData(result as any)));
  };

  mapCardData(result: TCardDetails): any {
    this.logger.debug("----- mapCardData ----");
    this.logger.debug("Data", result);
    this.cardDataSubject.next(result);
  }
}
