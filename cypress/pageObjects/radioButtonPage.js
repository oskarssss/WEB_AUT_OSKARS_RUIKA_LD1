import { BasePage } from "./basePage";

export class RadioButtonPage extends BasePage {
    static get url() {
        return '/radio-button';
    }

    static get yesButton() {
        return cy.get('#yesRadio');
    }

    static get impressiveButton() {
        return cy.get('#impressiveRadio');
    }

    static get noButton() {
        return cy.get('#noRadio');
    }

    static get message() {
        return cy.get('.mt-3');
    }
}