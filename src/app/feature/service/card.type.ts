export type TCardDetails = {
  expiry: string;
  reference: string;
  holder: THolderInfo;
  limit: number;
  accountBid: string;
  cardType: string;
  currency: string;
  id: string;
  maskedPan: string;
  spend: number;
  authorisationLimit: number;
  cardScheme: string;
  status: string;
};

export type THolderInfo = {
  title: string;
  firstName: string;
  lastName: string;
};
