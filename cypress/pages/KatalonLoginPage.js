import KatalonBasePage from "./KatalonBasePage"

class KatalonLoginPage extends KatalonBasePage {

    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/profile.php#login";
    }


    static get usernameField() {
        return cy.get('#txt-username');
    }

    static get passwordField() {
        return cy.get('#txt-password');
    }


    static get submitButton() {
        return cy.get('#btn-login');
    }


} 


export default KatalonLoginPage;