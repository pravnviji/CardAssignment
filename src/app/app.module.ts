import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "./shared/shared.module";
import { FeatureModule } from "./feature/feature.module";
import { CoreModule } from "./core/core.module";

const CustomModules = [SharedModule, FeatureModule, CoreModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ...CustomModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
