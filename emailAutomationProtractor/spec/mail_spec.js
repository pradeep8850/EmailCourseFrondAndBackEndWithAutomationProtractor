'use strict';
var data = require('..//mailData.json');
const {Email}= require('../pages/email.po.js');
const{BasePage}= require('../pages/basePage.js');
const{Home}=require('../pages/home.js');
const homePage=new Home();
const page=new Email();
const basePage=new BasePage();

describe('Mail page automation', ()=>{
    beforeAll(()=>{
        basePage.navigateFunction();
        homePage.navigateToEmail();
    });

    it('should validate the page heading', async ()=>{
        page.pageHeading(data.heading);
    });

    it('should validate the send button text and visibility', async ()=>{
        page.expect_SendButton(data.sendButton);
    });

    it('should validate the rest button text and visibility', async ()=>{
        page.expect_RestButton(data.restButton);
    });

    it('should validate the inner text of all input fields', async ()=>{
        page.expect_Text(data.innerText_To, data.innerText_Subject, data.innerText_Message);
    })
    
});