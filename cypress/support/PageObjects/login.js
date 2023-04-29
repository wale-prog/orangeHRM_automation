
class Login {
  getUsername(username) {
    return cy.get('input[name=username]').type(username)
  }

  getPassword(password) {
    return cy.get('input[name=password]').type(password)
  }
}
export default Login