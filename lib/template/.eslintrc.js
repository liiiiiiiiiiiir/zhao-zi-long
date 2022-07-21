module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint",
    "html"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-trailing-spaces": ["error"], // 不允许空行上的尾随空白
    "no-multi-assign": "error", // 禁止在单个语句中使用多个分配
    "no-multi-spaces": "error", // 禁止连续多个空格
    "camelcase": "error", // 变量名强制用驼峰
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "max-len": ["error", {
      "code": 200,
      "ignorePattern": "svg"
    }],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/order-in-components": "error", // 限制 Vue 文件属性的顺序
    "vue/define-macros-order": "error", // 限制 defineProps 和 defineEmits的顺序
    "vue/component-tags-order": ["error", { // 限制 Vue 文件结构顺序
      "order": ["script:not([setup])", "script[setup]", "template", "style:not([scoped])", "style[scoped]"]
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": { "max": 5 },
      "multiline": { "max": 1 }
    }],
    "comma-dangle": ["error", { // 末尾添加逗号问题
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "comma-spacing": "error", // 逗号后面需要空格
    "eqeqeq": ["error", "always"] // 不允许使用 ==
  }
};
