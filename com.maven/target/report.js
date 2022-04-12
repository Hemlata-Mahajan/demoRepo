$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK Offline Application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "jbk-offline-application;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 12,
      "id": "jbk-offline-application;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 13,
      "id": "jbk-offline-application;login-test;;2"
    },
    {
      "cells": [
        "radika@gmail.com",
        "arav78"
      ],
      "line": 14,
      "id": "jbk-offline-application;login-test;;3"
    },
    {
      "cells": [
        "hrshal@gamil.com",
        "678905"
      ],
      "line": 15,
      "id": "jbk-offline-application;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3690593448,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 5665703514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 18
    },
    {
      "val": "123456",
      "offset": 40
    }
  ],
  "location": "Teststepdef.user_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2292312128,
  "status": "passed"
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 24759182,
  "status": "passed"
});
formatter.after({
  "duration": 1867194786,
  "status": "passed"
});
formatter.before({
  "duration": 4195720391,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid \"radika@gmail.com\" and \"arav78\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 6341743473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "radika@gmail.com",
      "offset": 18
    },
    {
      "val": "arav78",
      "offset": 41
    }
  ],
  "location": "Teststepdef.user_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 880667908,
  "status": "passed"
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 20456905,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefenation.Teststepdef.user_should_be_on_home_page(Teststepdef.java:43)\r\n\tat ✽.Then user should be on home page(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 374007210,
  "status": "passed"
});
formatter.before({
  "duration": 3848252894,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid \"hrshal@gamil.com\" and \"678905\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 6200681331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hrshal@gamil.com",
      "offset": 18
    },
    {
      "val": "678905",
      "offset": 41
    }
  ],
  "location": "Teststepdef.user_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1222345783,
  "status": "passed"
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 23893908,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefenation.Teststepdef.user_should_be_on_home_page(Teststepdef.java:43)\r\n\tat ✽.Then user should be on home page(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 427425336,
  "status": "passed"
});
formatter.before({
  "duration": 3912964220,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "logo test",
  "description": "",
  "id": "jbk-offline-application;logo-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user should be see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "location": "Teststepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 6515001522,
  "status": "passed"
});
formatter.match({
  "location": "Teststepdef.user_should_be_see_JBK_logo()"
});
formatter.result({
  "duration": 307535880,
  "status": "passed"
});
formatter.after({
  "duration": 810795276,
  "status": "passed"
});
});