import { BasePage } from "./basePage";

export class TextBoxPage extends BasePage {
    static get url() {
        return '/text-box';
    }

    static get fullNameField() {
        return cy.get('#userName');
    }

    static get emailField() {
        return cy.get("[id='userEmail']");
    }

    static get currentAddressField() {
        return cy.get('#currentAddress');
    }

    static get permanentAddressField() {
        return cy.get('#permanentAddress');
    }

    static get submitButton() {
        return cy.get('#submit');
    }

    static get outputName() {
        return cy.get('#name');
    }

    static get outputEmail() {
        return cy.get('#email');
    }

    static get outputCurrentAddress() {
        return cy.get('p#currentAddress');
    }

    static get outputPermanentAddress() {
        return cy.get('p#permanentAddress');
    }
}