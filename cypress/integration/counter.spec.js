describe('Counter E2E tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.waitForReact();
  });

  it('should counter value be 0, when no prop "start"', () => {
    // mount(<Counter start="66" />);
    // cy.get('span').contains('66');
  });
  it('should counter value be as prop "start", when there is prop "start"', () => {
    cy.get('span').contains('55');
  });
  it('should have buttons to add and subtract', () => {
    cy.get('.add').contains('add');
    cy.get('.subtract').contains('subtract');
  });
  it('should add 1 after clicked "add" button', () => {
    cy.get('.add').click();
    cy.get('span').contains('56');
  });
  it('should subtract 1 after clicked "subtract" button', () => {
    cy.get('.subtract').click();
    cy.get('span').contains('54');
  });
  it('should change counter value after typing input and click "change counter"', () => {
    cy.get('input').type('66');
    cy.get('.change').click();
    cy.get('span').contains('66');
  });
  it('should reset counter value to "start" value, with start props defined', () => {
    cy.get('input').type('66');
    cy.get('.change').click();
    cy.get('span').contains('66');
    cy.get('.reset').click();
    cy.get('span').contains('55');
  });
});
