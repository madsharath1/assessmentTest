Feature: Perform User Registration and order product

  Background: Open the url and verify the page
    Given Open the url and verify using title

  Scenario: As a user I can register and try to order the product

    When I perform user registration
    Then User registration is successful
    When I try to add the product after user registration
    Then Correct product is added before the payment