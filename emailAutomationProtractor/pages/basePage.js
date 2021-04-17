'use strict'
var data = require('..//data.json');

class BasePage {
    navigateFunction() {
        browser.get(data.testURL);
    }
}


exports.BasePage=BasePage;
