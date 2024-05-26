import {getFormattedCurrentDate} from "../utils/utils"
import BasePage from "./basePage";
class UserPage extends BasePage{

    
    #userNameLocator = '#id_username'
    #userPasswordLocator = '#id_password'
    #userConfirmPasswordLocator = '#id_confirm_password'
    #userFirstNameLocator = '#id_first_name'
    #userEmailLocator = '#id_email'
    #userStaffStatusLocator = '#id_is_staff'
    #userSuperuserStatusLocator = '#id_is_superuser'
    #createUserButtonLocator = '.btn-primary'
    #userTableDetails = '.card > table'
    #userNameColumnLocator = 'tbody > :nth-child(1) > td'
    #userFullNameColumnLocator = 'tbody > :nth-child(2) > td'
    #userEmailColumnLocator = 'tbody > :nth-child(3) > td'
    #userCreateAtColumnLocator = 'tbody > :nth-child(4) > td'
    #userStatusColumnLocator = 'tbody > :nth-child(6) > td > i '
    #userStaffColumnLocator = 'tbody > :nth-child(7) > td > i '
    #userSuperUserColumnLocator = 'tbody > :nth-child(8) > td > i '



    createNewUser(userData){
        cy.get(this.#userNameLocator).type(userData.userName);
        cy.get(this.#userPasswordLocator).type(userData.password)
        cy.get(this.#userConfirmPasswordLocator).type(userData.password)
        cy.get(this.#userFirstNameLocator).type(userData.userFullName)
        cy.get(this.#userEmailLocator).type(userData.userEmail)

        cy.get(this.#userStaffStatusLocator).check()
        cy.get(this.#userSuperuserStatusLocator).check()
        cy.get(this.#createUserButtonLocator).contains("Create").click()
    }

    verfiyNewUserData(userData){
        cy.get(this.#userTableDetails).within(()=>{
            cy.get(this.#userNameColumnLocator).should("contain", userData.userName)
            cy.get(this.#userFullNameColumnLocator).should("contain", userData.userFullName)
            cy.get(this.#userEmailColumnLocator).should("contain", userData.userEmail)
            cy.get(this.#userCreateAtColumnLocator).should("contain", getFormattedCurrentDate() )
            cy.get(this.#userStatusColumnLocator).invoke('attr', "title").should("eq", userData.active)
            cy.get(this.#userStaffColumnLocator).invoke('attr', "title").should("eq", userData.staff)
            cy.get(this.#userSuperUserColumnLocator).invoke('attr', "title").should("eq", userData.superUser)
        })
    }



}

module.exports = UserPage