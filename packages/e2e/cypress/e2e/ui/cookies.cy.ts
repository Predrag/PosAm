import { CookiesPage } from "../../pages/cookies/cookies-page";

const cookiePage = new CookiesPage();

describe("Test Cookies Page", () => {
  before(() => {
    cy.visit("/");
  });
  it("Check if Cookie dialog window has appeared", () => {
    cookiePage.getCookieDialogWindow().should("be.visible");
  });
  it("After clicked on button Show Details the Manage Cookies dialog window should appear", () => {
    cookiePage.getCookieShowDetailsButton().click();
    cookiePage.getManageCookies().should("be.visible");
  });
  it("After clicked on Accept cookies the result should appear in Cookies file", () => {
    cy.getCookies().should("be.empty");
    cookiePage.getAllowCookies().click();
    cy.getCookies().then((cookie) => {
      expect(cookie[4]).to.have.property("domain", "www.posam.sk");
      expect(cookie[4]).to.have.property("name", "cookiesallowed");
      expect(cookie[4]).to.have.property("value", "true");
    });
  });
});
