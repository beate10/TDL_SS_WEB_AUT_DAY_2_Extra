import KatalonBasePage from "./KatalonBasePage";

class KatalonMakeAppoitmentPage extends KatalonBasePage{

    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/#appointment";
    }

    static get facilityField() {
        return cy.get('#combo_facility');
    }


    static get checkboxReadmission() {
        return cy.get('[for="chk_hospotal_readmission"]');
    }

    static get facilityField() {
        return cy.get('#combo_facility');
    }

    static get medicaidCheck() {
        return cy.get('#radio_program_medicaid');
    }


    static get dateField() {
        return cy.get('#txt_visit_date');
    }

    static get commentField() {
        return cy.get('#txt_comment');

    }

    static get submitButton() {
        return cy.get('#btn-book-appointment');

    }


    static get burgerIcon(){
        return cy.get('#menu-toggle');

    }

    static get sidebar(){
        return cy.get('#sidebar-wrapper');

    }

    static get historyButton(){
        return cy.get('[href="history.php#history"]');

    }


    
    
}

export default KatalonMakeAppoitmentPage;