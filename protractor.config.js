exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/protractor/*.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
