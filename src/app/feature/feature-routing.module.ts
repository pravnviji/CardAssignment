import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardHomeComponent } from "./card-home/card-home.component";
const routes: Routes = [
  {
    path: "",
    component: CardHomeComponent,
    data: {
      reuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
