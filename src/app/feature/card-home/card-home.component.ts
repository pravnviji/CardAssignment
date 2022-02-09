import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CardService, TCardDetails } from "../service";

@Component({
  selector: "app-card-home",
  templateUrl: "./card-home.component.html",
  styleUrls: ["./card-home.component.scss"],
})
export class CardHomeComponent implements OnInit {
  public cardData$: Observable<TCardDetails[]> | undefined =
    this.cardService.cardData$;

  public cardInfo: TCardDetails | null;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCardData().subscribe();
  }

  onSelectCard(cardData): void {
    this.cardInfo = cardData;
  }
}
