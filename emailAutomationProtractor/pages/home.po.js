'use strict';
var _= require('lodash'),
ResourcePage = require('./resource.po.js');

function HomePage(){
ResourcePage.call(this, 'home');
}

HomePage.prototype=Object.create(ResourcePage.prototype);
HomePage.prototype.constructor = HomePage;
HomePage.prototype.parent=HomePage.prototype;


var homeElement={
    heading: element(by.id('mainHeading')),
    pageHeading: element(by.xpath("//h1")),
    sendEmailHeading: element(by.xpath("//p")),
    sendEmailButton: element(by.id("sendEmailButton")),
    navigateToCourseButton: element(by.id("navigateToCourse")),
    
    buttonHeading: (number) =>{
        return element(by.xpath("(//p)["+number+"]"))
    }
}
_.assign(HomePage.prototype, homeElement);
 module.exports= HomePage;