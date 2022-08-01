describe("uji github", () => {
  it("buka situs github.com", () => {
      cy.visit("https://github.com/")
      cy.contains("Let's build from here")
  })

  it("login ke github", () =>{
    cy.get("header").find("button").first().click()
    cy.contains("Sign in").click()
    cy.url().should('eq', "https://github.com/login")

    cy.get("#login_field").type("abirohmat19@gmail.com")
    cy.get("#password").type("191411abi")

    cy.get("input").contains("Sign in").click()
    cy.url().should('eq', "https://github.com/")

    cy.get(".Header-link[aria-label='View profile and more']").click()
    cy.contains("Signed in as abirohmat")
    cy.get(".Header-link[aria-label='View profile and more']").click()
  })

  
})