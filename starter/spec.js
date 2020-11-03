// spec.js
import { settingsPage, selectECM, submitSettingsForm } from "./page-objects/settings-page.po";
import { doLogin } from "./page-objects/login.po";
import { createFolder, deleteFolder, filesPage } from "./page-objects/files-page.po";
import * as utils from "./page-objects/utils.po";

describe('ADF Demo App', function() {

 it('goes through the whole flow', function() {
   // Goes to settings page
  utils.goToPage('settings');
  utils.expectElementIsDisplayed(settingsPage.adfProviderSelector);

  // Opens selection overlay and selects ECM option
  selectECM();
  utils.expectElementTextToEqual(settingsPage.selectedValue, "ECM");

  // Submits form and goes to login page
  submitSettingsForm();
  utils.expectUrlToEqual("http://qaexercise.envalfresco.com/login");

  // Adds credentials, logins and goes to 'home' page
  doLogin();
  utils.expectUrlToEqual("http://qaexercise.envalfresco.com/home");

  // Navigates to 'files' page and creates a folder
  utils.goToPage("files")
  createFolder(utils.constants.GITHUBNAME);
  utils.expectElementIsDisplayed('[data-automation-id="text_' + utils.constants.GITHUBNAME + '"]');

  // Creates the same folder again and fails. Closes overlay
  createFolder(utils.constants.GITHUBNAME);
  utils.expectElementTextToEqual(filesPage.snackbar, "There\'s already a folder with this name. Try a different name.");
  utils.getElementBySelector(filesPage.cancelButton).click();

  // Deletes folder
  deleteFolder(utils.constants.GITHUBNAME);
  // I had to add the browser.sleep and ignoreSynchronization instances 
  // as protractor would wait for the snackbar to dissappear and then make the assetion
  browser.sleep(500);
  browser.ignoreSynchronization = true;
  utils.expectElementTextToEqual(filesPage.snackbar, utils.constants.GITHUBNAME + " deleted");
  browser.sleep(500);
  browser.ignoreSynchronization = false;
  });
});