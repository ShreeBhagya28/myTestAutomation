Feature: Sauce Labs application
    @saucelab_login
    Scenario: Sauce Labs login validation
        Given The Sauce lab application is launched
        When the credentials are provided
        Then the user logins in