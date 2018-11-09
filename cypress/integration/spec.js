describe('demo-react-redux', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('add new entry', () => {
        cy.get('div form input')
            .type('hello! {enter}')
			.type('world {enter}');
		cy.get('ul')
			.find('li')
			.should('have.length', 2)
	});

});