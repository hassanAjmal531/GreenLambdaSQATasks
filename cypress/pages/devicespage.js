
class DevicesPage{

    exportDeviceData(){
        cy.intercept("/dcim/devices/?export").as("downloadRequest")
        cy.get('.d-print-none > .btn-list > .dropdown > .btn').click()
        cy.xpath("//div[@class='dropdown']//li//a[contains(text(), 'All Data (CSV)')]").click()
    
        cy.wait('@downloadRequest')
    }
    verifyDownloadedFile(){
        const donwloadsFolder = Cypress.config("downloadsFolder")
        cy.readFile(`${donwloadsFolder}/netbox_devices.csv`).then(data=>{
        expect(data).to.exist
    })
    }

}

module.exports = DevicesPage