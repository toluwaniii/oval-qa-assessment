export const clickUpdateIcon = () => cy.get('.edit-icon > path')
export const clearTodo = () => cy.xpath("(//form[@class = 'todo-form'])[2]/div/input")
export const typeUpdatedTodo = () => cy.xpath("(//form[@class = 'todo-form'])[2]/div/input")
//export const clickUpdateTodo = () => cy.xpath("//button[@class = 'todo-button edit']")
export const updateTodoAssertion = () => cy.xpath("//div[text() = 'Get a job at Oval']")
export const updateTodoassertion = () => cy.xpath("//div[text() = 'Get a job at Oval']")

export const updateTodo = (updatedTodo) => {
    clickUpdateIcon().click({force: true})
    clearTodo().clear()
    typeUpdatedTodo().type(updatedTodo).type('{enter}')
    //clickUpdateTodo().click()
    updateTodoAssertion().should('be.visible')
    updateTodoassertion().should('not.contain.text', 'Complete Assessment')
}
