import { of } from "rxjs";

export class CardServiceStub {
  getCardData() {
    return of([
      {
        expiry: "12/2021",
        reference: "My new card",
        holder: {
          title: "Ms",
          firstName: "Pam",
          lastName: "Beesly",
        },
        limit: 2000,
        accountBid: "A12312312",
        cardType: "Mastercard Consumer",
        currency: "EUR",
        id: "V123123123",
        maskedPan: "1234567890987654",
        spend: 200,
        authorisationLimit: 232323,
        cardScheme: "MASTERCARD",
        status: "ACTIVE",
      },
      {
        expiry: "03/2017",
        reference: "Expired card",
        holder: {
          title: "Mr",
          firstName: "Dwight",
          lastName: "Schrute",
        },
        limit: 500,
        accountBid: "A32312312",
        cardType: "Mastercard Business",
        currency: "GBP",
        id: "V123133123",
        maskedPan: "09876543212345567",
        spend: 200,
        authorisationLimit: 40000,
        authorisations: 302,
        cardScheme: "MASTERCARD",
        status: "EXPIRED",
      },
      {
        expiry: "02/2020",
        reference: "Modulr Card",
        holder: {
          title: "Mr",
          firstName: "Jim",
          lastName: "Halpert",
        },
        limit: 50000,
        accountBid: "A32345312",
        cardType: "Visa Consumer",
        currency: "GBP",
        id: "V123323123",
        maskedPan: "1122334455667788",
        spend: 200,
        authorisationLimit: 606060,
        authorisations: 302,
        cardScheme: "VISA",
        status: "BLOCKED",
      },
    ]);
  }
}
