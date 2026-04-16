import { BasePage } from './basePage'

export class CheckboxPage extends BasePage {
    static get url() {
        return '/checkbox';
    }

    static expandFolder(folderName) {
        return cy
            .get('.rc-tree-title')
            .contains(folderName)
            .parent()
            .parent()
            .find('.rc-tree-switcher')
            .click();
    }

    static selectedCheckbox(checkboxName) {
        return cy
            .get('.rc-tree-title')
            .contains(checkboxName)
            .parent()
            .parent()
            .find('.rc-tree-checkbox')
            .click();
    }

    static get results() {
        return cy.get('#result');
    }

    static get textSuccess() {
        return cy.get('.text-success');
    }
}