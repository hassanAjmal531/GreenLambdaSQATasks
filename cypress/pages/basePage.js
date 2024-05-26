class BasePage{
    #addUserButtonLocator = '.btn-list > .btn-primary'
    clickAddButton(){
        cy.get(this.#addUserButtonLocator).click()
    }

}

module.exports = BasePage