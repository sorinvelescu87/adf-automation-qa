import * as utils from "./utils.po";
export const filesPage = {
    newFolderButton: '[data-automation-id="create-new-folder"]',
    modalTitle: "adf-folder-dialog h2",
    nameField: 'input[data-placeholder="Name"]',
    createFolderButton: '#adf-folder-create-button',
    // folder: '[data-automation-id="text_' + utils.constants.GITHUBNAME + '"]',
    snackbar: "simple-snack-bar",
    cancelButton: "#adf-folder-cancel-button", 
    // optionsMenuButton: '[aria-label="' + utils.constants.GITHUBNAME + '"] button[id^=action_menu_right]',
    deleteButton: '[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'
}

export function createFolder(folderName) {
    utils.getElementBySelector(filesPage.newFolderButton).click();
    browser.sleep(1000);
    utils.expectElementTextToEqual(filesPage.modalTitle, "New folder");
    utils.insertText(filesPage.nameField, folderName);
    utils.getElementBySelector(filesPage.createFolderButton).click();
}

export function deleteFolder(folderName) {
    utils.getElementBySelector('[aria-label="' + folderName + '"] button[id^=action_menu_right]').click();
    utils.getElementBySelector(filesPage.deleteButton).click();
}