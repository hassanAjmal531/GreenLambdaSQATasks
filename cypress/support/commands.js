// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 

// command to login in to the systems
Cypress.Commands.add("login", (userName, Password)=>{
   
    cy.xpath('//header//div[@class="container-fluid"]//a[@type="button" and @href="/login/?next=/"]').click()
    cy.get('#id_username').type(userName)
    cy.get('#id_password').type(Password)
    cy.xpath('//button[@type="submit"]').click()
})