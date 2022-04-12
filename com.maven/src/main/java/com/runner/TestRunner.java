package com.runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features= "src/main/java/com/feature",
       glue="com.stepdefenation",
       dryRun=false,//it is used to compile features file
       monochrome= true,//to readable output 
       plugin= "html:target",
        tags="@jbk"
       )
       
public class TestRunner {

}
