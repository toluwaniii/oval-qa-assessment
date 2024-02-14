export const typeTodo = () => cy.xpath("//input[@placeholder ='Add a todo']")
//export const clickAddTodo = () => cy.xpath("//button[@class ='todo-button']")
export const addTodoassertion = () => cy.xpath("//div[@class = 'todo-row']")
export const addTodoAssertion = () => cy.xpath("//div[text()= 'Complete Assessment']")

export const addTodo = (todo) => {
    typeTodo().type(todo).type('{enter}')
    //clickAddTodo().click()
    addTodoassertion().should('be.visible')
    addTodoAssertion().should('have.text', 'Complete Assessment')
}
