import * as utils from "./utils.po";

export const loginPage = {
    usernameField: '[data-automation-id="username"]',
    passwordField: '[data-automation-id="password"]',
    submitButton: '[data-automation-id="login-button"]'
}

export function doLogin() {
    utils.expectElementIsDisabled(loginPage.submitButton);
    utils.insertText(loginPage.usernameField, utils.constants.USERNAME);
    utils.insertText(loginPage.passwordField, utils.constants.PASSWORD);
    utils.getElementBySelector(loginPage.submitButton).click();
    utils.waitForUrltoContain('home', 5000);
}