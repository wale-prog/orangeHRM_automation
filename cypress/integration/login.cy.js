/// <reference types="cypress"  />

describe('Login oage', () => {
  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })
  it('verifies that user is able to login with correct credentials', () => {
    cy.get('input[name=username]').type('Admin')
    cy.get('input[name=password]').type('admin123{enter}')
    cy.url().should('not.eql', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get('.oxd-sidepanel').should('contain', 'AdminPIMLeave')
  })
  it('user is unable to log with wrong credentials', () => {
    cy.get('input[name=username]').type('Admin')
    cy.get('input[name=password]').type('admin124{enter}')
  })
})