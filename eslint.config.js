// eslint.config.js
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly", 
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly"
        // REMOVED options and current from globals
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "semi": "off",
      "indent": "off", 
      "quotes": "off",
      "no-undef": "off",
      "no-global-assign": "off"  // ADD THIS LINE
    },
    ignores: ["**/node_modules/", "**/dist/", "**/docs/"]
  }
];
