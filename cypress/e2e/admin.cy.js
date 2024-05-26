/// <reference types="cypress" />

import GroupsPage from "../pages/groupspage";
import HomePage from "../pages/homepage"
import UserPage from "../pages/userspage";

describe('Admin module', () => {
  // initlize all the classes 
  const homePage = new HomePage();
  const userPage = new UserPage()
  const groupsPage = new GroupsPage()
 

  it('verify that new user can be created by admin', () => {
    
    homePage.navigateToUsersInAdminTab()
    cy.fixture("userData").then(userData=>{
      userPage.clickAddButton()
      userPage.createNewUser(userData)
      userPage.verfiyNewUserData(userData)
    })
    
  })

  it("verfiy that new user group can be assigned to the user", ()=>{

    homePage.navigateToGroupsInUsersTab()
    cy.fixture("groupsData").then(groupsData=>{
      groupsPage.clickAddButton()
      cy.fixture("userData").then(userData=>{
        groupsPage.createNewGroup(groupsData, userData)
        groupsPage.verifyNewGroup(groupsData, userData)
      })

    })
  })

  

})