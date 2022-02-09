import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature-routing.module";
import { CardHomeComponent } from "./card-home";
import { SharedModule } from "../shared/shared.module";
import { CardService } from "./service";

@NgModule({
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
  declarations: [CardHomeComponent],
  providers: [CardService],
})
export class FeatureModule {}
