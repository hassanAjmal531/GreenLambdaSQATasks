/// <reference types="cypress" />

import GroupsPage from "../pages/groupspage";
import HomePage from "../pages/homepage"
import UserPage from "../pages/userspage";

describe('Admin', () => {

  const homePage = new HomePage();
  const userPage = new UserPage()
  const groupsPage = new GroupsPage()

  it('create a new user', () => {

    cy.fixture("userData").then(userData=>{
      homePage.navigateToUsersInAdminTab()
      userPage.clickAddButton()
      userPage.createNewUser(userData)
      userPage.verfiyNewUserData(userData)
    })
    
  })

  it("verfiy that new user group can be assigned to the user", ()=>{

    homePage.navigateToGroupsInUsersTab()
    cy.fixture("groupsData").then(groupsData=>{
      groupsPage.clickAddButton()
      groupsPage.createNewGroup(groupsData)
      cy.fixture("userData").then(userData=>{
        groupsPage.verifyNewGroup(groupsData, userData)
      })

    })
  })

  

})