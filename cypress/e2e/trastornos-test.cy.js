describe('test por trastornors page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('page was renderized correctly', ()=>{
        cy.contains('INTRODUCCION')
        cy.contains('Table of contents')
    })

    describe('kind of trastornos section should be working',()=>{
        it('test should be visible',()=>{
            cy.get().should(($row)=>{
                
            })
        })
        // TEST PARA CONFIRMAR QUE EL BOTON REDIRECCIONA A LA OTRA PAGINA WEB
        it('should redirect to trastornos website',()=> {
            cy.get('[data-test-id="trastornos-link-test"]').click()
    
            cy.location('pathname').should('eq','/trastornos')
        })
    })



})