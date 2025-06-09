import React from "react";
import { mount } from "cypress/react";
import ExpenseList from '../../../src/components/expence-tracker/ExpenseList'

const sampleExpenses = [
    { id: 1, description: 'Coffee', amount: 3.5, category: 'Food' },
    { id: 2, description: 'Notebook', amount: 5, category: 'Office' },
  ]
  
  describe('ExpenseList - unit test', () => {
    it('renders "No items expenses to track" when list is empty', () => {
      mount(<ExpenseList expenses={[]} onDelete={() => {}} />)
      cy.contains('No items expenses to track').should('exist')
    })
  
    it('renders a list of expenses and total', () => {
      mount(<ExpenseList expenses={sampleExpenses} onDelete={() => {}} />)
  
      cy.get('tbody tr').should('have.length', 2)
      cy.contains('Coffee')
      cy.contains('Notebook')
      cy.contains('$8.50') // total = 3.5 + 5
    })
  
    it('calls onDelete when Delete button is clicked', () => {
      const onDelete = cy.stub().as('deleteStub')
      mount(<ExpenseList expenses={sampleExpenses} onDelete={onDelete} />)
  
      cy.contains('Coffee').parent().contains('Delete').click()
      cy.get('@deleteStub').should('have.been.calledWith', 1)
    })
  })