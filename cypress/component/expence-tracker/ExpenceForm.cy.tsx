import React from "react";
import { mount } from "cypress/react";
import ExpenceForm from "../../../src/components/expence-tracker/ExpenceForm";
import categories from "../../../src/components/expence-tracker/categories";

describe("ExpenceForm - unit test", () => {
  it("renders all fields and category options", () => {
    mount(<ExpenceForm onSubmit={cy.stub()} />);

    cy.get("input#description").should("exist");
    cy.get("input#amount").should("exist");
    cy.get("select#category").should("exist");
    cy.get("option").should("have.length", categories.length + 1);
  });

  it("submits valid form data", () => {
    const onSubmit = cy.stub().as("submitSpy");
    mount(<ExpenceForm onSubmit={onSubmit} />);

    cy.get("input#description").type("Lunch");
    cy.get("input#amount").type("25");
    cy.get("select#category").select(categories[0]);
    cy.get("button").click();

    cy.get("@submitSpy").should("have.been.calledWithMatch", {
      description: "Lunch",
      amount: 25,
      category: categories[0],
    });
  });

  it("shows validation errors for empty form submission", () => {
    mount(<ExpenceForm onSubmit={cy.stub()} />);
    cy.get("button").click();

    cy.contains("Description should be at least 3 characters.").should("exist");
    cy.contains("Amount is required").should("exist");
    cy.contains("Category is required.").should("exist");
  });

  it("shows error for short description", () => {
    mount(<ExpenceForm onSubmit={cy.stub()} />);
    cy.get("input#description").type("ab");
    cy.get("button").click();
    cy.contains("Description should be at least 3 characters.").should("exist");
  });
});
