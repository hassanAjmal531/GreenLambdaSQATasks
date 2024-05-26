import {getFormattedCurrentDate} from "../utils/utils"
import BasePage from "./basePage";
class UserPage extends BasePage{

    
    #userNameLocator = ''


    createNewUser(userData){
        cy.get('#id_username').type(userData.userName);
        cy.get('#id_password').type(userData.password)
        cy.get('#id_confirm_password').type(userData.password)
        cy.get('#id_first_name').type(userData.userFullName)
        cy.get('#id_email').type(userData.userEmail)

        cy.get('#id_is_staff').check()
        cy.get('#id_is_superuser').check()
        cy.get('.btn-primary').contains("Create").click()
    }

    verfiyNewUserData(userData){
        cy.get('.card > table').within(()=>{
            cy.get('tbody > :nth-child(1) > td').should("contain", userData.userName)
            cy.get('tbody > :nth-child(2) > td').should("contain", userData.userFullName)
            cy.get('tbody > :nth-child(3) > td').should("contain", userData.userEmail)
            cy.get('tbody > :nth-child(4) > td').should("contain", getFormattedCurrentDate() )
            cy.get('tbody > :nth-child(6) > td > i ').invoke('attr', "title").should("eq", userData.active)
            cy.get('tbody > :nth-child(7) > td > i ').invoke('attr', "title").should("eq", userData.staff)
            cy.get('tbody > :nth-child(8) > td > i ').invoke('attr', "title").should("eq", userData.superUser)
        })
    }



}

module.exports = UserPage