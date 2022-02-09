import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "panMask",
})
export class PanMaskPipe implements PipeTransform {
  transform(number: string): string {
    const lastVisibleDigits = 4;
    const frontVisibleDigits = 6;
    const maskedSection = number.slice(6, -lastVisibleDigits);
    const lastVisibileSection = number.slice(-lastVisibleDigits);
    const frontVisibileSection = number.slice(-frontVisibleDigits);

    const resultPattern =
      frontVisibileSection +
      maskedSection.replace(/./g, "*") +
      lastVisibileSection;

    const formatCard = resultPattern.replace(/(\d{4}(?!\s))/g, "$1 ");

    return formatCard;
  }
}
