import React from "react";
import { mount } from "cypress/react";
import ButtonsPage from "../../src/pages/ButtonsPage";
import { BrowserRouter } from "react-router-dom"; // if GoHomeButton needs it
import Buttons from "../../src/components/Buttons/Buttons";

describe("ButtonsPage Component (basic render)", () => {
  beforeEach(() => {
    mount(
      <BrowserRouter>
      <ButtonsPage />
    </BrowserRouter>
  );
  });

  it("renders the page layout and child components", () => {
    cy.contains("Buttons Page").should("be.visible");
    cy.contains("Click Me").should("be.visible");
    cy.contains("Go Home").should("be.visible");
  });

});
