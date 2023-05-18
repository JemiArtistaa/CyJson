/// <reference types="cypress"/>

import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

const tests = require('../fixtures/example.json')

describe('OrangeHRM Demo',()=>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    tests.forEach(testData=>{
        it(testData.name,()=>{
    
            loginPage.typeUsername(testData.uName)
            loginPage.typePassword(testData.pWord)
            loginPage.clickLoginBtn()
    
            if(testData.name === 'validLogin')
                homePage.elements.userIcon().should('exist')
            else
                loginPage.elements.errorMsg().should('exist')
        })
    
    })

})