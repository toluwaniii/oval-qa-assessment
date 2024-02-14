export const visitLandingPage = () => {
    cy.visit('https://rudrakshabillore1.github.io/todo-list.github.io/')
    cy.xpath("//input[@placeholder ='Add a todo']").should('be.visible')
    cy.xpath("//button[@class ='todo-button']").should('be.visible')
}
