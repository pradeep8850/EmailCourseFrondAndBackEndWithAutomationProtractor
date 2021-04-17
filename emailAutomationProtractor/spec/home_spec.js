'use strict'
var data = require('..//data.json');
const{Home}=require('../pages/home.js');
const{BasePage}= require('../pages/basePage.js');
const bp=new BasePage();
const page=new Home();
var apidata = {
  id: 8525,
  title: "asdfasdfasdfasdfasdfasdfa",
  description: "Asdfasdfasdfasdfasdfsfasdfasdfadfqwerqwerqwerq  "
}
describe('Automation Of Home Page', () => {
  beforeAll(() => {
    bp.navigateFunction();
  })
  it('should check the home page heading',async () => {
    await page.heading(data.mainHeading);
    await page.pageHeading(data.pageHeading);
  })

  it('should check the main page heading',async () => {
    await page.pageHeading(data.pageHeading);
  })

  it('should check the heading and the text of send email button',async ()=>{
    await page.buttonHeading(1,data.emailHeading);
    await page.sendEmailButton(data.sendEmailButtonText);
  });

  it('should check the headers and the text of navigate to course button',async ()=>{
    await page.buttonHeading(2,data.courseHeading);
    await page.sendEmailButton(data.sendEmailButtonText);
    await page.navigateToCourseButton();
  })

})