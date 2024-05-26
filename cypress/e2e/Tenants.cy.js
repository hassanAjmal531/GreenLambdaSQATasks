/// <reference types="cypress" />
import HomePage from "../pages/homepage"
import TenantsPage from "../pages/tenantsPage"
describe('Tenants Module', () => {

  const tenantsPage = new TenantsPage()
  const homepage = new HomePage()

   
    it('verify that new tenant can be created', () => {
      homepage.navigateToTenantsInOrganizationTab()
      tenantsPage.clickAddButton()
      cy.fixture('tenantData').then(tenantData=>{
        tenantsPage.createNewTenant(tenantData)
        tenantsPage.verifyNewTenant(tenantData)
      })
    })
    it("verify that tenant can be searched and updated",()=>{
      homepage.navigateToTenantsInOrganizationTab()

      cy.fixture("tenantData").then(tenantData=>{
        tenantsPage.quickSearhTenant(tenantData.tenantName)
        tenantsPage.openTenantDetail(tenantData.tenantName)
        tenantsPage.editTenantDetail(tenantData.newTenantName)
        tenantsPage.quickSearhTenant(tenantData.newTenantName)
        tenantsPage.verifyTenantDetails(tenantData.newTenantName)
      })
      
    })
})