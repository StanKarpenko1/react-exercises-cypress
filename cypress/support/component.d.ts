/// <reference types="cypress" />
import { MountOptions, MountReturn } from 'cypress/react';
import { ReactNode } from 'react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**s
       * Mount a React component
       * @example cy.mount(<MyComponent />)
       */
      mount(component: ReactNode, options?: MountOptions): Chainable<MountReturn>;
    }
  }
}
