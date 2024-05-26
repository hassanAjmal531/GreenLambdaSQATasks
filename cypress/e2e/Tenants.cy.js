/// <reference types="cypress" />
import HomePage from "../pages/homepage"
import TenantsPage from "../pages/tenantsPage"
describe('Tenants Module', () => {

  const tenantsPage = new TenantsPage()
  const homepage = new HomePage()

   
    it('Verify that admin user can create a new tenant in customer group', () => {
      homepage.navigateToTenantsInOrganizationTab()
      tenantsPage.clickAddButton()
      cy.fixture('tenantData').then(tenantData=>{
        tenantsPage.createNewTenant(tenantData)
        tenantsPage.verifyNewTenant(tenantData)
      })
    })
    it("Verify the admin can update/modify that tenants",()=>{
      homepage.navigateToTenantsInOrganizationTab()

      cy.fixture("tenantData").then(tenantData=>{
        tenantsPage.quickSearhTenant(tenantData.tenantName)
        tenantsPage.openTenantDetail()
        tenantsPage.editTenantDetail(tenantData.newTenantName)
        tenantsPage.quickSearhTenant(tenantData.newTenantName)
        tenantsPage.verifyTenantDetails(tenantData.newTenantName)
      })
      
    })
})