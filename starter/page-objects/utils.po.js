export const constants = {
    EC: protractor.ExpectedConditions,
    USERNAME: "guest@example.com",
    PASSWORD: "Password",
    GITHUBNAME: "sorinvelescu87"
}

export function currentUrl() {
    return browser.getCurrentUrl();
}

export function getElementBySelector(selector) {
    return element(by.css(selector))
}

export function elementIsDisplayed(selector) {
    return getElementBySelector(selector).isDisplayed();
}

export function goToPage(pageName) {
    browser.get('http://qaexercise.envalfresco.com/' + pageName);
}

export function waitForUrltoContain (string, duration) {
    browser.wait(constants.EC.urlContains(string), duration);
}

export function expectElementIsDisplayed(selector) {
    expect(elementIsDisplayed(selector)).toBe(true);
}

export function getElementText(selector) {
    return getElementBySelector(selector).getText();
}

export function expectElementTextToEqual(selector, string) {
    expect(getElementText(selector)).toEqual(string);
}

export function expectUrlToEqual(url) {
    expect(currentUrl()).toEqual(url);
}

export function expectElementIsDisabled(selector) {
    expect(getElementBySelector(selector).isEnabled()).toBe(false);
}

export function insertText(selector, string) {
    getElementBySelector(selector).sendKeys(string);
}