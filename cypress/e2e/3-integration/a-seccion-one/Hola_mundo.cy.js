describe("Bienvenido al curso de cypress sección 1", () =>{
    it('Mi primer test -> el famoso hola mundo', () => {
        cy.log("Hola mundo");
        cy.wait(1000);
    });

    it("Mi segundo test -> Campo name", () =>{
        cy.visit("http://www.uitestingplayground.com/textinput");
        cy.get("#newButtonName").type("Marcos Cano");
        cy.wait(1000);
    })

  })//Cierre de describe
  