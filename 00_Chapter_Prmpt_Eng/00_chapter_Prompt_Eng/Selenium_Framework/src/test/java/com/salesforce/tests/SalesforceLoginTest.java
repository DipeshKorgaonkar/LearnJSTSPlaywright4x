package com.salesforce.tests;

import com.salesforce.pages.SalesforceLoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class SalesforceLoginTest extends BaseTest {

    @Test(priority = 1)
    public void testValidLoginSubmission() throws Exception {
        try {
            SalesforceLoginPage loginPage = new SalesforceLoginPage(driver);
            loginPage.enterUsername("testuser@enterprise.com");
            loginPage.enterPassword("ValidPass123!");
            loginPage.clickRememberMe();
            Assert.assertTrue(loginPage.isRememberMeSelected(), "Remember Me checkbox should be selected");
            loginPage.clickLogin();
        } catch (Exception e) {
            Assert.fail("Valid login test failed due to exception: " + e.getMessage());
        }
    }

    @Test(priority = 2)
    public void testInvalidLoginErrorMessage() throws Exception {
        try {
            SalesforceLoginPage loginPage = new SalesforceLoginPage(driver);
            loginPage.doLogin("invalid.user@salesforce.test", "InvalidPassword123");
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for invalid credentials");
            String actualErrorMessage = loginPage.getErrorMessage();
            Assert.assertTrue(actualErrorMessage.contains("Please check your username and password"),
                    "Error message text mismatch. Actual: " + actualErrorMessage);
        } catch (Exception e) {
            Assert.fail("Invalid login test failed due to exception: " + e.getMessage());
        }
    }

    @Test(priority = 3)
    public void testEmptyPasswordSubmission() throws Exception {
        try {
            SalesforceLoginPage loginPage = new SalesforceLoginPage(driver);
            loginPage.enterUsername("testuser@enterprise.com");
            loginPage.clickLogin();
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed when password is empty");
            String actualErrorMessage = loginPage.getErrorMessage();
            Assert.assertTrue(actualErrorMessage.contains("Please enter your password"),
                    "Error message text mismatch. Actual: " + actualErrorMessage);
        } catch (Exception e) {
            Assert.fail("Empty password test failed due to exception: " + e.getMessage());
        }
    }
}
