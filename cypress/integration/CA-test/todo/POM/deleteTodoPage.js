export const clickDeleteTodo = () => cy.get('.delete-icon > g > path:nth-child(2)')
export const deleteTodoAssertion = () =>  cy.xpath("//div[@class = 'todo-row']")
export const deleteTodoassertion = () => cy.xpath("//div[text() = 'Get a job at Oval']")

export const deleteTodo = () => {
    clickDeleteTodo().click({force: true})
    deleteTodoAssertion().should('not.exist')
    deleteTodoassertion().should('not.exist')
}