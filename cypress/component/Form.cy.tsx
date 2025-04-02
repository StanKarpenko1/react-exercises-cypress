import React from "react";
import { mount } from "cypress/react";
import Form from "../../src/components/Form/Form";

describe("Form Component", () => {
  beforeEach(() => {
    mount(<Form />);
  });

  it("should render Name and Age input fields and Submit button", () => {
    cy.get("input#name").should("exist");
    cy.get("input#age").should("exist");
    cy.get("button[type=submit]").should("contain", "Submit");
  });

  it("should show required error when name is empty", () => {
    cy.get("button[type=submit]").click();
    cy.contains("The Name Field is required.").should("be.visible");
  });

  it("should show minLength error when name is too short", () => {
    cy.get("input#name").type("Al");
    cy.get("button[type=submit]").click();
    cy.contains("Name should be at least 3 characters").should("be.visible");
  });

  it("should submit form without errors when valid data is entered", () => {
    const logStub = cy.stub(console, "log").as("consoleLog");
    cy.get("input#name").type("Alice");
    cy.get("input#age").type("30");
    cy.get("button[type=submit]").click();

    cy.get("@consoleLog").then((logStub: any) => {
        const stub = logStub 
        expect(stub).to.have.been.calledOnce;
        const args = stub.getCall(0).args[0];
        expect(args).to.deep.equal({ name: "Alice", age: "30" });
      });
  });
});
