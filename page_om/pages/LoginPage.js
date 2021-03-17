import { Selector, t } from 'testcafe'

    class LoginPage {
        constructor(){
            this.loginButton = Selector('#login-button')
            this.userNameField = Selector('#user-name')
            this.passwordField = Selector('#password')
            this.errorMessage = Selector('h3').withText('Epic sadface')
        }

        async submitLogin (user, password) {
            await t.typeText(this.userNameField, user)
                .typeText(this.passwordField, password)
                .click(this.loginButton);
        }
    }

export default new LoginPage() 