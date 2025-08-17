
Feature: Browser window

    Scenario: New Tab
        Given I go to homepage 
        When I click <button> 
        Then the <event>

        Examples:
            | button                | event
            | New Tab               | New Tab Opens
            | New Window            | New Window Opens
            | New Window Message    | New Window Message Opens