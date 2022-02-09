import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-virtual-card",
  templateUrl: "./virtual-card.component.html",
  styleUrls: ["./virtual-card.component.scss"],
})
export class VirutalCardComponent {
  @Input() public cardData;
}
