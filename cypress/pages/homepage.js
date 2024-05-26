
class HomePage{

    #adminLocator = '//div[@id="sidebar-menu"]//li[position()=13]'
    #userTabLocator = '[href="/users/users/"]'
    #groupsTabLocator = '[href="/users/groups/"]'
    #devicesTabLocator = '//div[@id="sidebar-menu"]//li[position()=2]'
    #devicesSubTabLocator = '[href="/dcim/devices/"]'
    #organizationLocator = '//div[@id="sidebar-menu"]//li[position()=1]'
    #tenantsTabLocator = '[href="/tenancy/tenants/"]'

    navigateToUsersInAdminTab (){
        cy.xpath(this.#adminLocator).click().within(()=>{
        cy.get(this.#userTabLocator).click()
      })

    }
    navigateToGroupsInUsersTab(){
        cy.xpath(this.#adminLocator).click().within(()=>{
            cy.get(this.#groupsTabLocator).click()
          })
    }
    navigateTodevicesInDevicesTab(){
      cy.xpath(this.#devicesTabLocator).click().within(()=>{
          cy.get(this.#devicesSubTabLocator).click()
        })
  }

  navigateToTenantsInOrganizationTab(){
    cy.xpath(this.#organizationLocator).click().within(()=>{
      cy.get(this.#tenantsTabLocator).click()
    })
  }

}

module.exports = HomePage