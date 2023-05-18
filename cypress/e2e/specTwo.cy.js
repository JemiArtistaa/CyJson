/// <reference types = "Cypress"/>


describe ('testsuit name',()=>{

    let datas;

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('example').then(cData => {
            datas = cData;
        });
    });
    it('testcase name', ()=>{

        cy.get('input[name="username"]').type(datas.uName)
        cy.get('input[name="password"]').type(datas.pWord)
        cy.get('button[type="submit"]').contains(' Login ').click();
    })
})