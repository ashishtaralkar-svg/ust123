class login {

    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'username' })
        this.password = page.getByRole('textbox', { name: 'password' })
        this.submit = page.getByRole('button', { name: 'Login' })
        

    }

    async navigation(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.submit.click()
    }
}
module.exports = { login }