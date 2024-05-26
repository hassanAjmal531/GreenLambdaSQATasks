import BasePage from "./basePage"
class TenantsPage extends BasePage{

    createNewTenant(tenantData){
        cy.get('#id_name').type(tenantData.tenantName);
        cy.get('#id_slug').click()
        cy.get('#id_group-ts-control').type(`${tenantData.group} {enter}`)
        cy.get('.btn-primary').contains("Create").click()
    }
    verifyNewTenant(tenantData){
        cy.get('.toast-body').should("be.visible")
        cy.xpath('//h2[contains(@class, "page-title")]').should("contain", tenantData.tenantName)
    }
    quickSearhTenant(tenantName){
        cy.get('#object-list > .row').find("#quicksearch").as("quicksearch")
      cy.get("@quicksearch").type(tenantName)
      cy.wait(1000)
    }
    openTenantDetail(tenantName){
        cy.xpath('//table//tbody//td[last()]//a[@type="button"][1]').click()
        cy.get('.page-title').contains(tenantName)
    }
    editTenantDetail(newTenantName){
        cy.get('#id_name').clear().type(newTenantName)
        cy.get('#reslug').click()
        cy.xpath('//button[@type="submit" and @name="_update"]').click()
        cy.get('.toast-body').should("be.visible").should("contain", "Modified tenant")
    }
    verifyTenantDetails(tenantName){
        cy.xpath('//table//tbody//td[position()=2]//a').contains(tenantName).click()
        cy.get('.page-title').contains(tenantName);  
    }


    
}

module.exports = TenantsPage