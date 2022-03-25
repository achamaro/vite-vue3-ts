module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    // Compiler macros such as defineProps and defineEmits generate no-undef warnings
    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    "vue/setup-compiler-macros": true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error",
    "vue/multi-word-component-names": "off",
    "no-undef": "off",
  },
};
