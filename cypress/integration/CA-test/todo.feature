Feature: Navigate into application add todo, edit and delete todo.

   As a user
   I want to add, update and delete a todo 

    Scenario: Add, edit and delete todo 
    Given I get to the landing page
    When I add todo successfully
    And I update todo
    Then I should be able to delete todo
