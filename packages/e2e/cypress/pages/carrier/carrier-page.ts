export class CarrierPage {
  getCarrierButton() {
    return cy.get(".header__right").find("a").eq(0);
  }
  getCarrierPosition(): Cypress.Chainable<any> {
    return cy
      .get(".careerboxes .careerboxes__container a div div:nth-child(1)")
      .eq(0);
  }
  getSendCV(): Cypress.Chainable<any> {
    return cy.get('#endpage div[class="buttons"] a');
  }
  getFirstName(): Cypress.Chainable<any> {
    return cy.get('input[name="meno"]');
  }
  getLastName(): Cypress.Chainable<any> {
    return cy.get('input[name="priezvisko"]');
  }
  getEmail(): Cypress.Chainable<any> {
    return cy.get('input[name="email"]');
  }
  getPosition(): Cypress.Chainable<any> {
    return cy.get('select[name="pozicia"]');
  }
  getFrom(): Cypress.Chainable<any> {
    return cy.get('select[name="odkial"]');
  }
  getUploadCVFile() {
    return cy.get(
      ":nth-child(1) > .form_file > .js__form-files > .files-controlls > .inputDnD > .form-control-file"
    );
  }
  getUploadedCV() {
    return cy.get(":nth-child(2) > .before");
  }
}
