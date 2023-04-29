/// <reference types="cypress"  />
import Login from "../support/PageObjects/login"

describe('Login page', () => {
  const login = new Login
  beforeEach(function () {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('projectData').then(function (data){
      this.data = data
    })
  })
  it('verifies that user is able to login with correct credentials', function () {
    login.getUsername('Admin')    
    login.getPassword('admin123{enter}')   
    cy.url().should('not.eql', this.data.loginUrl)
    cy.url().should('eq', this.data.dashboardUrl)
    cy.get('.oxd-sidepanel').should('exist')
  })
  it('user is unable to log with wrong password', function () {
    login.getUsername('Admin')    
    login.getPassword('admin124{enter}')
    cy.url().should('eql', this.data.loginUrl)
    cy.url().should('not.eq', this.data.dashboardUrl)
    cy.get('.oxd-alert').should('have.text', 'Invalid credentials')
  })
  it('user is unable to log in with wrong username', function () {
    login.getUsername('Richard')    
    login.getPassword('admin123{enter}')
    cy.url().should('eql', this.data.loginUrl)
    cy.url().should('not.eq', this.data.dashboardUrl)
    cy.get('.oxd-alert').should('have.text', 'Invalid credentials')
  })
  it('user is unable to log with wrong username and password', function (){
    login.getUsername('Richard')    
    login.getPassword('admin124{enter}')
    cy.url().should('eql', this.data.loginUrl)
    cy.url().should('not.eq', this.data.dashboardUrl)
    cy.get('.oxd-alert').should('have.text', 'Invalid credentials')
  })
})