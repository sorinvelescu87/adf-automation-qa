import * as utils from "./utils.po";

export const settingsPage = {
    adfProviderSelector: "#adf-provider-selector",
    ecmOption: "#mat-option-1",
    selectedValue: ".mat-select-value",
    submitButton: '[data-automation-id="host-button"]'
}

export function selectECM() {
    utils.getElementBySelector(settingsPage.adfProviderSelector).click();
    utils.getElementBySelector(settingsPage.ecmOption).click();
}

export function submitSettingsForm() {
    utils.expectElementIsDisplayed(settingsPage.submitButton);
    utils.getElementBySelector(settingsPage.submitButton).click();
    utils.waitForUrltoContain('login', 5000);
}