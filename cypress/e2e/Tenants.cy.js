/// <reference types="cypress" />
describe('Admin', () => {

    const tenantName = "testing user " + new Date().getTime() 
    it('create a new user', () => {
  
      const tenantName = "testing user " + new Date().getTime() // adding time stamp in order to generate a new user name every time
      
      cy.xpath('//div[@id="sidebar-menu"]//li[position()=1]').click().within(()=>{
        cy.get('[href="/tenancy/tenants/"]').click()
      })
      cy.get('.btn-list > .btn-primary').click()
      cy.get('#id_name').type(tenantName);
      cy.get('#id_slug').click()
      cy.get('#id_group-ts-control').type("customers {enter}")
      cy.get('.btn-primary').contains("Create").click()
      cy.get('.toast-body').should("be.visible")
      cy.xpath('//h2[contains(@class, "page-title")]').should("contain", tenantName)
  
    })
  })