import { getGreeting } from '../support/app.po';

describe('range', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to range!');
  });
});
