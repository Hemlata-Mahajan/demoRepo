@login
Feature: JBK Offline Application

@jbk
Scenario Outline: login test

Given user should be on login page
When user enter valid "<uname>" and "<pass>"
Then user should be on home page

Examples:
|uname           |pass |
|kiran@gmail.com|123456|
|radika@gmail.com|arav78|
|hrshal@gamil.com|678905|


@jbk
 Scenario: logo test

Given user should be on login page
Then user should be see JBK logo
 