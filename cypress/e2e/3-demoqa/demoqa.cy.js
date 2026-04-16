import { ButtonPage } from "../../pageObjects/buttonPage";
import { CheckboxPage } from "../../pageObjects/checkboxPage";
import { RadioButtonPage } from "../../pageObjects/radioButtonPage";
import { TextBoxPage } from "../../pageObjects/textBoxPage";
import { WebTablesPage } from "../../pageObjects/webTablesPage";

describe('DEMOQA', () => {
  context('Text Box tests', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/text-box');
    });
 
    it.only('Text Box', () => {
      // Set FullName field
      // cy.get('#userName').type('John Doe')
      TextBoxPage.fullNameField.type('John Doe');
      // Set Email field
      // cy.get("[id='userEmail']").type('johndoe@inbox.com')
      TextBoxPage.emailField.type('johndoe@inbox.lv');
      // Set Current Address field
      // cy.get("[id='currentAddress']").type('Address A');
      TextBoxPage.currentAddressField.type('Address A');
      // Set Permanent field
      // cy.get("[id='permanentAddress']").type('Address B');
      TextBoxPage.permanentAddressField.type('Address B');
      // Click Submit button
      // cy.get("[id='submit']").click();
      TextBoxPage.submitButton.click();
      // Validate
      // Name:
      // cy.get('#name').should('have.text', 'Name:John Doe');
      TextBoxPage.outputName.should('have.text', 'Name:John Doe');
      // Email:
      // cy.get('#email').should('have.text', 'Email:johndoe@inbox.com');
      TextBoxPage.outputEmail.should('have.text', 'Email:johndoe@inbox.lv')
      //Current Address :
      // cy.get('p#currentAddress').should('contain.text', 'Current Address :Address A');
      TextBoxPage.outputCurrentAddress.should('contain.text', 'Current Address :Address A')
      // Permanent Address :
      // cy.get('p#permanentAddress').should('contain.text', 'Permananet Address :Address B');
      TextBoxPage.outputPermanentAddress.should('contain.text', 'Permananet Address :Address B')
    });

    it('Text Box - Negative', () => {
        TextBoxPage.emailField.type('johndoe@inbox.lv');
        TextBoxPage.submitButton.click();
        TextBoxPage.emailField.should('have.class', 'field-error');
      })
  });

  context('Checkbox tests', () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });

    it.only('Checkbox test', () => {
      //Expand home
      CheckboxPage.expandFolder('Home');
      //Expand Desktop
      CheckboxPage.expandFolder('Desktop');
      //Expand Notes
      CheckboxPage.selectedCheckbox('Notes');
      //Expand Documents
      CheckboxPage.expandFolder('Documents');
      //Expand Office
      CheckboxPage.expandFolder('Office');
      //Select Private
      CheckboxPage.selectedCheckbox('Private');
      //Validate that we see the message: You have selected:
      //First Version
      CheckboxPage.results.should('have.text', 'You have selected :notesprivate');
      //Second Version
      CheckboxPage.textSuccess.should('contain.text', 'notes');
      CheckboxPage.textSuccess.should('contain.text', 'private');
    });

    it.only('Checkbox test - Select All', () => {
      CheckboxPage.expandFolder('Home');
      CheckboxPage.expandFolder('Desktop');
      CheckboxPage.expandFolder('Documents');
      CheckboxPage.expandFolder('WorkSpace');
      CheckboxPage.expandFolder('Office');
      CheckboxPage.expandFolder('Downloads');
      CheckboxPage.selectedCheckbox('Home');

      CheckboxPage.textSuccess.should('contain.text', 'home');
      CheckboxPage.textSuccess.should('contain.text', 'desktop');
      CheckboxPage.textSuccess.should('contain.text', 'documents');
      CheckboxPage.textSuccess.should('contain.text', 'notes');
      CheckboxPage.textSuccess.should('contain.text', 'commands');
      CheckboxPage.textSuccess.should('contain.text', 'workspace');
      CheckboxPage.textSuccess.should('contain.text', 'office');
      CheckboxPage.textSuccess.should('contain.text', 'wordFile');
      CheckboxPage.textSuccess.should('contain.text', 'excelFile');
      CheckboxPage.textSuccess.should('contain.text', 'react');
      CheckboxPage.textSuccess.should('contain.text', 'angular');
      CheckboxPage.textSuccess.should('contain.text', 'veu');
      CheckboxPage.textSuccess.should('contain.text', 'public');
      CheckboxPage.textSuccess.should('contain.text', 'private');
      CheckboxPage.textSuccess.should('contain.text', 'classified');
      CheckboxPage.textSuccess.should('contain.text', 'general');
    });

  });

  context('Radio button tests', () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it.only('Radio button test', () => {
      //Click on yes button (#yesRadio)
      //Validate that we see the message: you have selected Yes
      RadioButtonPage.yesButton.click();
      RadioButtonPage.message.should('have.text', 'You have selected Yes');
      // RadioButtonPage.textSuccess.should('contain.text', 'You have selected Yes');

      //Click on Impressive button (#impressiveRadio)
      //Validate that we see the message: You have selected Impressive
      RadioButtonPage.impressiveButton.click();
      RadioButtonPage.message.should('have.text', 'You have selected Impressive');
      // RadioButtonPage.textSuccess.should('contain.text', 'You have selected Impressive');

      //Validate that No button is disabled (#noRadio)
      RadioButtonPage.noButton.should('be.disabled');
      RadioButtonPage.noButton.should('have.attr', 'disabled');

    });
  });

  context('Button tests', () => {
    beforeEach(() => {
      ButtonPage.visit();
    });
    
    it.only('Button test', () => {
      //Do the double click on doubleClickMeButton
      //Validate Message
      ButtonPage.doubleClickMeButton.dblclick();
      ButtonPage.doubleClickMessage.should('have.text', 'You have done a double click');
      //Do the right click on rightClickMeButton
      //Validate MEssage
      ButtonPage.rightClickMeButton.rightclick();
      ButtonPage.rightClickMessage.should('have.text', 'You have done a right click');
      //Do the click on clickMeButton
      //Validate Message
      ButtonPage.clickMeButton.click();
      ButtonPage.dynamicMessage.should('have.text', 'You have done a dynamic click');
    });
  });

  context('Web Table tests', () => {
    beforeEach(() => {
      WebTablesPage.visit();
    }) ;

    it.only('Web Table test', () => {
      const data = { firstName: 'John', 
        lastName: 'Doe', 
        email: 'johndoe@inbox.com', 
        age: '99', 
        salary: '100000', 
        department: 'IT'
      }
      //Click on Add button
      WebTablesPage.addNewRecordBtn.click();
      //Set First Name
      WebTablesPage.firstNameField.type(data.firstName)
      //Set Last name
      WebTablesPage.lastNameField.type(data.lastName);
      //Set Email
      WebTablesPage.emailField.type(data.email)
      //Set Age
      WebTablesPage.ageField.type(data.age)
      //Set Salary
      WebTablesPage.salaryField.type(data.salary)
      //Set Department
      WebTablesPage.departmentField.type(data.department)
      //Click Submit
      WebTablesPage.submitBtn.click();
      //Validate that the newly created record appears 
      WebTablesPage.searchBox.type(data.email);

      WebTablesPage.rows.should('have.length', '1')
    })
  })
});
