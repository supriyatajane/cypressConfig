import {Utility}from "../../support/utility"


///<reference types="cypress"/>



describe('verify the config files ',()=>{

    // it('Tc-01 verify the login url',()=>{
    //     n
    // })

    // it('Tc-02 verify password',()=>{
    //     cy.visit('/auth/requestPasswordResetCode')
    
    // })

    //second way to acesss
    it('Tc-03 cypress config object',()=>{
       let base= Cypress.config().baseUrl
       cy.visit(base)
       let time=Cypress.config().execTimeout
       cy.log(time)
    })

    
    it.only('verify with valid credentials',function(){
        let obj =  new Utility()
        let d  = obj.getBaseUrl()
        cy.visit(d)
   })

})