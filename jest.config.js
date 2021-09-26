const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");

module.exports = {
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"],

  
  //add any custom configurations here
  moduleNameMapper: {
    '^c/displayPanel$': '<rootDir>/force-app/test/jest-mocks/c/displayPanel',
    "^lightning/button$": "<rootDir>/force-app/test/jest-mocks/lightning/button"
  }
};
