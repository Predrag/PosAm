import { CarrierPage } from "../../pages/carrier/carrier-page";
import { Variables } from "../../env/variables";

const carrierPage = new CarrierPage();
const env = Variables;

before(() => {
  cy.visit("/");
});
describe("Send CV", () => {
  it("Should write contact info to form", () => {
    carrierPage.getCarrierButton().click();
    carrierPage.getCarrierPosition().click({ force: true });
    carrierPage.getSendCV().click();
    carrierPage.getFirstName().type(env.FIRST_NAME);
    carrierPage.getLastName().type(env.LAST_NAME);
    carrierPage.getEmail().type(env.EMAIL);
    carrierPage
      .getPosition()
      .select(
        "Hľadáme skúseného IT Analytika pre projekt v oblasti energetiky!",
        { force: true }
      )
      .should("have.value", "PP-PJAA-CJGGFN");
  });
  it("Should upload CV", () => {
    carrierPage
      .getUploadCVFile()
      .selectFile("cypress/fixtures/test_CV.pdf", { force: true });
    carrierPage.getUploadedCV().should("have.text", "test_CV.pdf");
  });
});
