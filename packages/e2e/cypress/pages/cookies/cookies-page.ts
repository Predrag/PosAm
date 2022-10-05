import Chainable = Cypress.Chainable;

export class CookiesPage {
  getCookieDialogWindow(): Chainable<any> {
    return cy.get(".cookies__first");
  }
  getCookiesFooter() {
    return cy.get(".cookies__first__footer");
  }
  getCookieShowDetailsButton() {
    return this.getCookiesFooter().find(
      '[class="button__border js_cookies_detail hide-xs-2"]'
    );
  }
  getManageCookies() {
    return cy.get("#cookies-simple");
  }
  getAllowCookies() {
    return this.getManageCookies().find(".hide-xs").find("button").eq(1);
  }
}
