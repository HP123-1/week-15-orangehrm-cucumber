package com.orangelive.demo.opensource.cucumber.steps;


import com.orangelive.demo.opensource.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LoginSteps {
    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new AccountPage().clickOnLogoutLink();
    }

    @Then("^I should see the \"([^\"]*)\" text$")
    public void iShouldSeeTheText(String welcomeTxt) {
        Assert.assertEquals(new AccountPage().getWelcomeText(), welcomeTxt);

    }

    @And("^I click on welcome admin button$")
    public void iClickOnWelcomeAdminButton() {
        new AccountPage().clickOnWelcomeAdmin();
    }

    @Then("^verify \"([^\"]*)\" text$")
    public void verifyText(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
