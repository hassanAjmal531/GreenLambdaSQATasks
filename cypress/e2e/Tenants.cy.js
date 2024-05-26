/// <reference types="cypress" />
describe('Tenants test cases', () => {

    const tenantName = "testing user " + new Date().getTime() 
    it('create a new tenant', () => {
      
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
    it("verify that tenant can be searched and updated",()=>{
      cy.xpath('//div[@id="sidebar-menu"]//li[position()=1]').click().within(()=>{
        cy.get('[href="/tenancy/tenants/"]').click()
      })
      cy.get('#object-list > .row').find("#quicksearch").as("quicksearch")
      cy.get("@quicksearch").type(tenantName)
      cy.wait(1000)
      cy.xpath('//table//tbody//td[last()]//a[@type="button"][1]').click()
      cy.get('.page-title').contains(tenantName)
      const newTenantName = "testingtenant"+new Date().getTime()
      cy.get('#id_name').clear().type(newTenantName)
      cy.get('#reslug').click()
      cy.xpath('//button[@type="submit" and @name="_update"]').click()
      cy.get('.toast-body').should("be.visible").should("contain", "Modified tenant")
    

      cy.get("@quicksearch").type(newTenantName)
      cy.wait(1000)
      cy.xpath('//table//tbody//td[position()=2]//a').contains(newTenantName).click()
      cy.get('.page-title').contains(newTenantName);  
    })
})