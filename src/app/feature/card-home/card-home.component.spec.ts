import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CardService, CardServiceStub } from "../service";
import { CardHomeComponent } from "./card-home.component";

describe("CardHomeComponent", () => {
  let component: CardHomeComponent;
  let fixture: ComponentFixture<CardHomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardHomeComponent],
        providers: [{ provide: CardService, useClass: CardServiceStub }],
      }).compileComponents();
    })
  );

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardHomeComponent],
        providers: [{ provide: CardService, useClass: CardServiceStub }],
      }).compileComponents();

      beforeEach(() => {
        fixture = TestBed.createComponent(CardHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      test(`should be create`, () => {
        expect(component).toBeTruthy();
      });

      test(`ngOnInit should call getCardData and Subscribe`, () => {
        component.ngOnInit();
        const app = fixture.debugElement.componentInstance;
        app.cardService
          .getCardData()
          .subscribe((res) => expect(res).toBeGreaterThanOrEqual(0));
      });
    })
  );
});
