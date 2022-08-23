import KatalonBasePage from "../pages/KatalonBasePage"
import KatalonHistoryPage from "../pages/KatalonHistoryPage";
import KatalonLoginPage from "../pages/KatalonLoginPage"
import KatalonMakeAppoitmentPage from "../pages/KatalonMakeAppoitmentPage";
import KatalonSummaryPage from "../pages/KatalonSummaryPage";




describe("Katalon testing", () => {

    beforeEach(() => {
      KatalonBasePage.visit();
      KatalonBasePage.appointmentButton.click();
      KatalonLoginPage.usernameField.type("John Doe");
      KatalonLoginPage.passwordField.type("ThisIsNotAPassword");
      KatalonLoginPage.submitButton.click();
    })

    it("Scenario 1", () => {
      

      KatalonMakeAppoitmentPage.facilityField.select("Seoul CURA Healthcare Center");
      KatalonMakeAppoitmentPage.checkboxReadmission.click();
      KatalonMakeAppoitmentPage.medicaidCheck.click();
      KatalonMakeAppoitmentPage.dateField.type("30/08/2022");
      KatalonMakeAppoitmentPage.commentField.type("Probably will be late", {force:true});
      KatalonMakeAppoitmentPage.submitButton.click();
      

      KatalonSummaryPage.facilityInfo.should("have.text", "Seoul CURA Healthcare Center");
      KatalonSummaryPage.readmissionInfo.should("have.text", "Yes");
      KatalonSummaryPage.programInfo.should("have.text", "Medicaid");
      KatalonSummaryPage.dateInfo.should("have.text", "30/08/2022");
      KatalonSummaryPage.commentInfo.should("have.text", "Probably will be late");
  
    })


    it.only ("Scenario 2", () => {
      KatalonMakeAppoitmentPage.burgerIcon.click();
      KatalonMakeAppoitmentPage.sidebar.should("have.class", "active");
      KatalonMakeAppoitmentPage.historyButton.click();
      KatalonHistoryPage.appointmentStatus.should("have.text", "No appointment.");
    })

})