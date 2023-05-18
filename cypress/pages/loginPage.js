class loginPage{

    elements = {
        username : ()=> cy.get('input[name="username"]'),
        password : ()=> cy.get('input[name="password"]'),
        loginBtn : ()=> cy.get('button[type="submit"]'),
        errorMsg : ()=> cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    }

    typeUsername(user){
        this.elements.username().type(user)
    }

    typePassword(pwd){
        this.elements.password().type(pwd)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click()
    }

    getErrorMsg(){
        return this.elements.errorMsg()
    }

}

module.exports = new loginPage();