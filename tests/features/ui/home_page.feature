@only
Feature: Home Page

    Scenario: Check redirect
        Given I go to homepage 
        When I click on <header> Header
        Then I check if the text message is correct after click header

        Examples:
            | header |
            | Elements |
            | Forms |
            | Alerts, Frame & Windows |
            | Widgets |
            | Interactions |
            | Book Store Application |
        
