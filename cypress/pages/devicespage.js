
class DevicesPage{

    #exportButtonLocator = '.d-print-none > .btn-list > .dropdown > .btn'
    #currentViewExportOptionLocator = "//div[@class='dropdown']//li//a[contains(text(), 'Current View')]"
    #tenantFeildFilterLocator = '#id_tenant_id-ts-control'
    #filterTabLocator = '//div[@class="container-fluid"]/ul/li[2]'
    #searchButtonFilterLocator = '//div[contains(@class, "card-footer")]//button[@type="submit"]'

    exportDeviceData(){
        cy.intercept("/dcim/devices/*").as("downloadRequest")
        cy.get(this.#exportButtonLocator).click()
        cy.xpath(this.#currentViewExportOptionLocator).click()
        cy.wait('@downloadRequest')
    }

    searchDeviceUsingTenant(tenantName){
        cy.xpath(this.#filterTabLocator).click()
        cy.get(this.#tenantFeildFilterLocator).as("tenant")
        cy.get("@tenant").type(tenantName)
        cy.wait(1000)
        cy.get("@tenant").type("{enter}")
        cy.xpath(this.#searchButtonFilterLocator).click()

    }
    verifyDownloadedFile(){
        const donwloadsFolder = Cypress.config("downloadsFolder")
        cy.readFile(`${donwloadsFolder}/netbox_devices.csv`).then(data=>{
        expect(data).to.exist
    })
    }

}

module.exports = DevicesPage