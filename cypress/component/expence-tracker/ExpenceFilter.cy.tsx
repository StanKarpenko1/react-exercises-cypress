import React from "react";
import { mount } from "cypress/react";
import ExpenceFilter from "../../../src/components/expence-tracker/ExpenceFilter";
import categories from "../../../src/components/expence-tracker/categories";

describe("ExpenceFilter - unit test", () => {
  it("renders correctly with default props", () => {
    mount(<ExpenceFilter onSelectCategory={() => {}} />);

    cy.get("select").should("exist");
    cy.get("option").should("have.length", categories.length + 1);
    cy.get("option").first().should("have.text", "All Categories");
  });

  it("renders all dynamic category options", () => {
    mount(<ExpenceFilter onSelectCategory={() => {}} />);

    categories.forEach((cat) => {
      cy.get("option")
        .contains(cat)
        .should("exist");
    });
  });

  it("reacts to user selecting a category", () => {
    const onSelectCategory = cy.stub().as("onSelectCategory");
    mount(<ExpenceFilter onSelectCategory={onSelectCategory} />);

    cy.get("select").select(categories[0]);
    cy.get("@onSelectCategory").should("have.been.calledWith", categories[0]);
  });

  it('allows selecting "All Categories"', () => {
    const onSelectCategory = cy.stub().as("onSelectCategory");
    mount(<ExpenceFilter onSelectCategory={onSelectCategory} />);
  
    // Select a real category first to trigger a change
    cy.get("select").select(categories[0]);
  
    // Now select "All Categories" (value = "")
    cy.get("select").select("All Categories");
  
    cy.get("@onSelectCategory").should("have.been.calledWith", "");
  });
  
});
