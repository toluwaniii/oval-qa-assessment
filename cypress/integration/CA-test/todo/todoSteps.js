import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import { addTodo } from './POM/addTodoPage'
import { updateTodo } from './POM/updateTodopage'
import { deleteTodo } from './POM/deleteTodoPage'
import { visitLandingPage } from './POM/utils'

describe('Oval Assessment', () => {

Given('I get to the landing page', () => {
    visitLandingPage();
    })

When('I add todo successfully', () => {
    addTodo('Complete Assessment');
    })

And('I update todo', () => {
    updateTodo('Get a job at Oval');
    })

Then('I should be able to delete todo', () => {
    deleteTodo();
    })

})
