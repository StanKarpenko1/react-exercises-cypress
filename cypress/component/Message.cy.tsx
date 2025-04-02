import React from "react";
import { mount } from "cypress/react";
import Message from "../../src/components/Message/Message";
import MessagePage from "../../src/pages/MessagePage"
import { BrowserRouter } from "react-router-dom";


// test for Message component
describe("Message Component", () => {
  it("should render 'Hello, World!'", () => {
    mount(<Message />);
    cy.contains("h2", "Hello, World!").should("be.visible");
  });
});


// test for Message Page, different viewports included
describe("Message Page", () => {
  
  const viewports = ["macbook-15", "ipad-2", "iphone-6"]; 

  viewports.forEach((viewport: any) => {
    context(`Viewport: ${viewport}`, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        mount(
          <BrowserRouter>
            <MessagePage />
          </BrowserRouter>
        );
      });

      it("should display the page title", () => {
        cy.contains("h1", "Message Page").should("be.visible");
      });

      it("should render the Message component", () => {
        cy.contains("h2", "Hello, World!").should("be.visible");
      });

      it("should display the Go Home button", () => {
        cy.contains("button", "Go Home").should("be.visible");
      });

      it("should allow clicking Go Home button", () => {
        cy.contains("button", "Go Home").click();
      });
    });
  });
});
