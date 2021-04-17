'use strict';
var request = require("superagent");
class api {
    post(postURL, apidata){
        request.post(postURL)
      .send( apidata )
      .end();
    }    
}