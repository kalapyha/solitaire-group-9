/// <reference types="cypress" />

describe('Top bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should reset score', () => {
        cy.get('.MuiChip-label').should('have.text', 'Score: 42');
        cy.get('[data-testid="reset-btn"]').click();
        cy.get('.MuiChip-label').should('have.text', 'Score: 0');
    });

    it('should toggle theme', () => {
        cy.get('[data-testid="day-night-switcher"]').should('not.have.class', 'Mui-checked');
        cy.get('[data-testid="day-night-switcher"]').click();
        cy.get('[data-testid="day-night-switcher"]').should('have.class', 'Mui-checked');
    });
});
