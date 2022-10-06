before(() => {
  Cypress.config("baseUrl", "http://localhost:2222");
});
const getEmployees = [
  { id: 1, firstName: "Martin", lastName: "Peter" },
  { id: 2, firstName: "Peter", lastName: "Jan" },
];
const insertEmployee = {
  id: 3,
  firstName: "TestFirstName",
  lastName: "TestLastName",
};

describe("Test Employer API", () => {
  it("Should GET status 200", () => {
    cy.request("/").then((response) => {
      expect(response.status).equal(200);
    });
  });
  it("Should GET all employees", () => {
    cy.request("/").then((response) => {
      getEmployees.forEach((employee, index) => {
        expect(response.body.employees[index]).deep.equal(getEmployees[index]);
      });
    });
  });
  it("Should Insert employee to DB", () => {
    cy.request({
      url: "/employer",
      method: "POST",
      body: {
        id: 3,
        firstName: "TestFirstName",
        lastName: "TestLastName",
      },
    }).then((response) => {
      cy.request("/employer/3").then((insertedEmp) => {
        expect(insertedEmp.body).deep.equal(insertEmployee);
      });
    });
  });
  it("Should Delete employee to DB", () => {
    cy.request({
      url: "/employer/3",
      method: "DELETE",
    }).then((response) => {
      cy.request("/employer/3").then((response) => {
        expect(response.body).deep.equal({
          error: "Employee with 3 id does not exists",
        });
      });
    });
  });
  it("Should response with Non Existing endpoint", () => {
    cy.request({
      url: "/nonExistingEndpoint",
      method: "GET",
    }).then((response) => {
      expect(response.body).deep.equal({ error: "Non Existing endpoint" });
    });
  });
});
