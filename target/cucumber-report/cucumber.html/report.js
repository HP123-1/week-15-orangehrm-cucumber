$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("leave.feature");
formatter.feature({
  "line": 1,
  "name": "Orangehrm Leave Test",
  "description": "As a user I want to navigate to login page successfully",
  "id": "orangehrm-leave-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18361309600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should navigate to employee leave page successfully",
  "description": "",
  "id": "orangehrm-leave-test;user-should-navigate-to-employee-leave-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on leave list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify employee \"Show Leave with Status\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 291363100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 259746900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 151817800,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2473415000,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLeaveList()"
});
formatter.result({
  "duration": 22172503200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show Leave with Status",
      "offset": 17
    }
  ],
  "location": "LeaveSteps.verifyEmployeeText(String)"
});
formatter.result({
  "duration": 74304500,
  "status": "passed"
});
formatter.after({
  "duration": 1388974800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Orangehrm Login Test",
  "description": "As a user I want to navigate to login page successfully",
  "id": "orangehrm-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6202767600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should navigate to login page successfully",
  "description": "",
  "id": "orangehrm-login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"Welcome sdzfasf\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 208820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 274986600,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2418176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome sdzfasf",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iShouldSeeTheText(String)"
});
formatter.result({
  "duration": 799876800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [Paul]\u003e but was:\u003cWelcome [sdzfasf]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.orangelive.demo.opensource.cucumber.steps.LoginSteps.iShouldSeeTheText(LoginSteps.java:18)\r\n\tat ???.Then I should see the \"Welcome sdzfasf\" text(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1523132000,
  "status": "passed"
});
});