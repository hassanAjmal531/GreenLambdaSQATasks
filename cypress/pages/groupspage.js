import BasePage from "./basePage"
class GroupsPage extends BasePage{

   createNewGroup(groupsData){
    cy.get('#id_name').type(groupsData.groupName)
    cy.get('#id_description').type(groupsData.groupDescription)
   }
   verifyNewGroup(groupsData, userData){
    cy.get('#id_users-ts-control').as("user")
    cy.get('@user').type(userData.userName)
    cy.wait(1000)
    cy.get("@user").type("{enter}")
    cy.xpath('//button[@type="submit" and @name="_create"]').click()
    cy.get('.page-title').should("contain", groupsData.groupName)
    cy.get(':nth-child(1) > td').invoke('text').should("eq", groupsData.groupName)
    cy.get(':nth-child(2) > td').invoke('text').should('eq', groupsData.groupDescription)
    cy.get(':nth-child(1) > .list-group > .list-group-item').invoke('text').should("eq", userData.userName)
   }

}

module.exports = GroupsPage