/// <reference types="cypress" />


import {getFormattedCurrentDate} from "../utils/utils"
describe('Admin', () => {

  

  it('create a new user', () => {

    cy.fixture("userData").then(userData=>{
        cy.xpath('//div[@id="sidebar-menu"]//li[position()=13]').click().within(()=>{
        cy.get('[href="/users/users/"]').click()
      })
        cy.get('.btn-list > .btn-primary').click()
        cy.get('#id_username').type(userData.userName);
        cy.get('#id_password').type(userData.password)
        cy.get('#id_confirm_password').type(userData.password)
        cy.get('#id_first_name').type(userData.userFullName)
        cy.get('#id_email').type(userData.userEmail)

        cy.get('#id_is_staff').check()
        cy.get('#id_is_superuser').check()
        cy.get('.btn-primary').contains("Create").click()
    
        cy.get('.card > table').within(()=>{
        cy.get('tbody > :nth-child(1) > td').should("contain", userData.userName)
        cy.get('tbody > :nth-child(2) > td').should("contain", userData.userFullName)
        cy.get('tbody > :nth-child(3) > td').should("contain", userData.userEmail)
        cy.get('tbody > :nth-child(4) > td').should("contain", getFormattedCurrentDate() )
        cy.get('tbody > :nth-child(6) > td > i ').invoke('attr', "title").should("eq", userData.active)
        cy.get('tbody > :nth-child(7) > td > i ').invoke('attr', "title").should("eq", userData.staff)
        cy.get('tbody > :nth-child(8) > td > i ').invoke('attr', "title").should("eq", userData.superUser)
      })
    })
    
  })

  it("verfiy that new user group can be assigned to the user", ()=>{

    cy.xpath('//div[@id="sidebar-menu"]//li[position()=13]').click().within(()=>{
      cy.get('[href="/users/groups/"]').click()
    })
    const groupName = "testing groups"+ new Date().getTime()
    cy.get('.btn-list > .btn-primary').click()
    cy.get('#id_name').type(groupName)
    cy.get('#id_description').type("this is a testing group")
    cy.fixture("userData").then(userData=>{
      cy.get('#id_users-ts-control').as("user")
      cy.get('@user').type(userData.userName)
      cy.wait(1000)
      cy.get("@user").type("{enter}")
      cy.xpath('//button[@type="submit" and @name="_create"]').click()
      cy.get('.page-title').should("contain", "testing group")
      cy.get(':nth-child(1) > td').invoke('text').should("eq", groupName)
      cy.get(':nth-child(2) > td').invoke('text').should('eq', "this is a testing group")
      cy.get(':nth-child(1) > .list-group > .list-group-item').invoke('text').should("eq", userData.userName)
    })
  })

  

})