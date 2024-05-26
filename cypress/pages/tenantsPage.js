import BasePage from "./basePage"
class TenantsPage extends BasePage{

    #tenantNameLocator = '#id_name'
    #tenantSlugLocator = '#id_slug'
    #tenantGroupLocator = '#id_group-ts-control'
    #createTenantButton = '.btn-primary'
    #toastBodyLocator = '.toast-body'
    #pageTitleLocator = '//h2[contains(@class, "page-title")]'
    #quickSearchParentElementLocator = '#object-list > .row'
    #quickSearchLocator ="#quicksearch"
    #tenatdetailLinkLocator = '//table//tbody//td[last()]//a[@type="button"][1]'
    #tenatUpdateSlutLocator = '#reslug'
    #tenantUpdateButtonLocator = '//button[@type="submit" and @name="_update"]'
    #tenantNameDetailLocator = '//table//tbody//td[position()=2]//a'
    

    createNewTenant(tenantData){
        cy.get(this.#tenantNameLocator).type(tenantData.tenantName);
        cy.get(this.#tenantSlugLocator).click()
        cy.get(this.#tenantGroupLocator).type(`${tenantData.group} {enter}`)
        cy.get(this.#createTenantButton).contains("Create").click()
    }
    verifyNewTenant(tenantData){
        cy.get(this.#toastBodyLocator).should("be.visible")
        cy.xpath(this.#pageTitleLocator).should("contain", tenantData.tenantName)
    }
    quickSearhTenant(tenantName){
        cy.get(this.#quickSearchParentElementLocator).find(this.#quickSearchLocator).as("quicksearch")
      cy.get("@quicksearch").type(tenantName)
      cy.wait(1000)
    }
    openTenantDetail(){
        cy.xpath(this.#tenatdetailLinkLocator).click()
        
    }
    editTenantDetail(newTenantName){
        cy.get(this.#tenantNameLocator).clear().type(newTenantName)
        cy.get(this.#tenatUpdateSlutLocator).click()
        cy.xpath(this.#tenantUpdateButtonLocator).click()
        cy.get(this.#toastBodyLocator).should("be.visible").should("contain", "Modified tenant")
    }
    verifyTenantDetails(tenantName){
        cy.xpath(this.#tenantNameDetailLocator).contains(tenantName).click()
        cy.xpath(this.#pageTitleLocator).contains(tenantName);  
    }


    
}

module.exports = TenantsPage