import React from "react";
import { mount } from "cypress/react";
import Alert from "../../src/components/Alert/Alert"; // adjust path as needed

describe("Alert Component", () => {
  it("renders children correctly", () => {
    mount(<Alert>This is an alert</Alert>);
    cy.contains("This is an alert").should("be.visible");
  });

  it("renders the close button", () => {
    mount(<Alert>This is an alert</Alert>);
    cy.get("button.btn-close").should("be.visible");
  });

  it("calls onClose when close button is clicked", () => {
    const onCloseSpy = cy.stub().as("onClose");
    mount(<Alert onClose={onCloseSpy}>Dismiss me</Alert>);

    cy.get("button.btn-close").click();
    cy.get("@onClose").should("have.been.calledOnce");
  });
});
