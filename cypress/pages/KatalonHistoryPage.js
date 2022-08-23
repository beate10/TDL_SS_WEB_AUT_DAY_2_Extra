import KatalonBasePage from "./KatalonBasePage";

class KatalonHistoryPage extends KatalonBasePage {

    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/history.php#history";
    }

    static get appointmentStatus() {
        return cy.get('.col-sm-12 > p')

    }
}


export default KatalonHistoryPage;