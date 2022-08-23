import KatalonBasePage from "./KatalonBasePage";

class KatalonSummaryPage extends KatalonBasePage{

    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/appointment.php#summary";
    }

    static get facilityInfo() {
        return cy.get('#facility');
    }

    static get readmissionInfo() {
        return cy.get('#hospital_readmission');
    }

    static get programInfo() {
        return cy.get('#program');
    }

    static get dateInfo() {
        return cy.get('#visit_date');
    }


    static get commentInfo() {
        return cy.get('#comment');
    }
}


export default KatalonSummaryPage;