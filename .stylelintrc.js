/**
 * @description stylelint
 */
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  customSyntax: "postcss-html",
};
