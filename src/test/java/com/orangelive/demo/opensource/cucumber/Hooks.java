package com.orangelive.demo.opensource.cucumber;

import com.cucumber.listener.Reporter;

import com.orangelive.demo.opensource.propertyreader.PropertyReader;
import com.orangelive.demo.opensource.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends Utility {
    @Before
    public void openBrowser() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("Hinal");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        driver.quit();
    }


}
