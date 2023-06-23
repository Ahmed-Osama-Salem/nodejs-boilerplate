module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
  },
};
