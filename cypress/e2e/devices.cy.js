/// <reference types="cypress" />

const DevicesPage = require("../pages/devicespage")
const HomePage = require("../pages/homepage")

describe('devices', () => {
  const homepage = new HomePage()
  const devicesPage = new DevicesPage()
  it("verify that devices data can be exported in csv formate", ()=>{
    homepage.navigateTodevicesInDevicesTab()
    devicesPage.exportDeviceData()
    devicesPage.verifyDownloadedFile()
  })
  
})