// An example configuration file.
exports.config = {
  directConnect: true,
  //baseUrl: 'http://localhost:4000',

  capabilities: {
    'browserName': 'chrome'
  },


  framework: 'jasmine',

  specs: ['..//spec//*_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: async ()=>{
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(10000);
  }
};