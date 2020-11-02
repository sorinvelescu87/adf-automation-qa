// spec.js

describe('ADF Demo App', function() {
  const USERNAME = "guest@example.com";
  const PASSWORD = "Password";
  const GITHUBNAME = "sorinvelescu87";

 it('goes through the whole flow', function() {
   // Goes to settings page
  browser.get("http://qaexercise.envalfresco.com/settings");
  var adfProviderSelector = element(by.id('adf-provider-selector'));
  expect(adfProviderSelector.isDisplayed()).toBeTruthy();

  // Opens selection overlay and selects ECM option
  adfProviderSelector.click()
  var ecmOption = element(by.id("mat-option-1"));
  ecmOption.click();
  var selectedValue = $(".mat-select-value");
  expect(selectedValue.getText()).toEqual("ECM");

  // Submits form and goes to login page
  var submitButton = element(by.css('[data-automation-id="host-button"]'));
  expect(submitButton.isDisplayed()).toBeTruthy();
  submitButton.click();
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.urlContains('login'), 5000);
  expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/login");

  // Adds credentials, logins and goes to 'home' page
  var usernameField = element(by.css('[data-automation-id="username"]'));
  var passwordField = element(by.css('[data-automation-id="password"]'));
  var submitButton = element(by.css('[data-automation-id="login-button"]'));
  expect(submitButton.isEnabled()).toBe(false);
  usernameField.sendKeys(USERNAME);
  passwordField.sendKeys(PASSWORD);
  submitButton.click();
  browser.wait(EC.urlContains('home'), 5000);
  expect(browser.getCurrentUrl()).toEqual("http://qaexercise.envalfresco.com/home");

  // Navigates to 'files' page and creates a folder
  browser.get("http://qaexercise.envalfresco.com/files");
  var newFolderButton = element(by.css('[data-automation-id="create-new-folder"]'));
  newFolderButton.click();
  browser.sleep(1000);
  var modalTitle = element(by.css("adf-folder-dialog h2"));
  expect(modalTitle.getText()).toEqual("New folder");
  var nameField = element(by.css('input[data-placeholder="Name"]'));
  nameField.sendKeys(GITHUBNAME);
  var createFolderButton = element(by.id('adf-folder-create-button'));
  createFolderButton.click(); 
  var folder = element(by.css('[data-automation-id="text_' + GITHUBNAME + '"]'));
  expect(folder.isDisplayed()).toBe(true);
  browser.sleep(1000);

  // Creates the same folder again and fails. Closes overlay
  newFolderButton.click();
  nameField.sendKeys(GITHUBNAME);
  createFolderButton.click(); 
  var snackbar = element(by.css("simple-snack-bar"));
  expect(snackbar.getText()).toEqual("There\'s already a folder with this name. Try a different name.");
  var cancelButton = element(by.id("adf-folder-cancel-button")); 
  cancelButton.click();

  // Deletes folder
  var optionsMenuButton = element(by.css('[aria-label="' + GITHUBNAME + '"] button[id^=action_menu_right]'));
  optionsMenuButton.click();
  var deleteButton = element(by.css('[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'));
  deleteButton.click();

  // I had to add the browser.sleep and ignoreSynchronization instances 
  // as protractor would wait for the snackbar to dissappear and then make the assetions
  browser.sleep(500);
  browser.ignoreSynchronization = true;
  expect(snackbar.getText()).toEqual(GITHUBNAME + " deleted");
  browser.sleep(500);
  browser.ignoreSynchronization = false;
  });
});