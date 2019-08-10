exports.config = {
  tests: 'test_scenarios/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'www.at.ing.be',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-playground'
}