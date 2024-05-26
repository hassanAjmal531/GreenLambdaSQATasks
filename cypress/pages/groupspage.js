import BasePage from "./basePage"
class GroupsPage extends BasePage{

   #groupNameLocator = '#id_name'
   #groupDescriptionLocator = '#id_description'
   #userNameLocator = '#id_users-ts-control'
   #createButtonLocator = '//button[@type="submit" and @name="_create"]'
   #pageTitleLocator = '.page-title'
   #groupNameDetailLocator = ':nth-child(1) > td'
   #groupDescriptionDetailLocator = ':nth-child(2) > td'
   #userNameDetailLocator = ':nth-child(1) > .list-group > .list-group-item'
   createNewGroup(groupsData, userData){
    cy.get(this.#groupNameLocator).type(groupsData.groupName)
    cy.get(this.#groupDescriptionLocator).type(groupsData.groupDescription)
    cy.get(this.#userNameLocator).as("user")
    cy.get('@user').type(userData.userName)
    cy.wait(1000)
    cy.get("@user").type("{enter}")
    cy.xpath(this.#createButtonLocator).click()
   }
   verifyNewGroup(groupsData, userData){
    
    cy.get(this.#pageTitleLocator).should("contain", groupsData.groupName)
    cy.get(this.#groupNameDetailLocator).invoke('text').should("eq", groupsData.groupName)
    cy.get(this.#groupDescriptionDetailLocator).invoke('text').should('eq', groupsData.groupDescription)
    cy.get(this.#userNameDetailLocator).invoke('text').should("eq", userData.userName)
   }

}

module.exports = GroupsPage