import { BasePage } from "./basePage";

export class ButtonPage extends BasePage {
    static get url() {
        return '/buttons';
    }

    static get doubleClickMeButton() {
        return cy.get('#doubleClickBtn');
    }

    static get rightClickMeButton() {
        return cy.get('#rightClickBtn');
    }

    static get clickMeButton() {
        return cy.contains('button', /^Click Me/).click();
    }

    static get rightClickMessage() {
        return cy.get('#rightClickMessage');
    }

    static get doubleClickMessage() {
        return cy.get('#doubleClickMessage');
    }

    static get dynamicMessage() {
        return cy.get('#dynamicClickMessage');
    }
}