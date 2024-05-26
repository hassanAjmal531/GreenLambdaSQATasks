/// <reference types="cypress" />

describe('devices', () => {

  it("verify that devices data can be exported in csv formate", ()=>{
    cy.xpath('//div[@id="sidebar-menu"]//li[position()=2]').click().within(()=>{
      cy.get('[href="/dcim/devices/"]').click()
    })
    cy.intercept("https://demo.netbox.dev/dcim/devices/?export").as("downloadRequest")
    cy.get('.d-print-none > .btn-list > .dropdown > .btn').click()
    cy.xpath("//div[@class='dropdown']//li//a[contains(text(), 'All Data (CSV)')]").click()

    cy.wait('@downloadRequest')
    const donwloadsFolder = Cypress.config("downloadsFolder")
    cy.readFile(`${donwloadsFolder}/netbox_devices.csv`).then(data=>{
        expect(data).to.exist
    })
    
  })
  
})