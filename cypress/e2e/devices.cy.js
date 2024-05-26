/// <reference types="cypress" />

const DevicesPage = require("../pages/devicespage")
const HomePage = require("../pages/homepage")

describe('Devices modules', () => {
  const homepage = new HomePage()
  const devicesPage = new DevicesPage()
  it("verify that devices data can be exported in csv formate", ()=>{
    homepage.navigateTodevicesInDevicesTab()
    devicesPage.searchDeviceUsingTenant("Cyberdyne Systems")
    devicesPage.exportDeviceData()
    devicesPage.verifyDownloadedFile()
  })
  
})