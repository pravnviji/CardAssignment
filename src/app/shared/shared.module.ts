import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VirutalCardComponent } from "./components";
import { PanMaskPipe } from "./pipes/pan-mask.pipe";

@NgModule({
  declarations: [VirutalCardComponent, PanMaskPipe],
  imports: [CommonModule],
  exports: [VirutalCardComponent],
})
export class SharedModule {}
