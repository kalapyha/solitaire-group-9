describe('empty spec', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('passes', () => {
        cy.get('[data-testid="reset-score-btn"]');
    });
});
