/// <reference types="cypress" />

const DevicesPage = require("../pages/devicespage")
const HomePage = require("../pages/homepage")

describe('Devices modules', () => {
  const homepage = new HomePage()
  const devicesPage = new DevicesPage()
  it("Verify that tenants devices data can be exported in csv format", ()=>{
    homepage.navigateTodevicesInDevicesTab()
    devicesPage.searchDeviceUsingTenant("Cyberdyne Systems")
    devicesPage.exportDeviceData()
    devicesPage.verifyDownloadedFile()
  })
  
})