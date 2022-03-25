module.exports = {
  // "*.{js,ts,vue}": "eslint --cache --fix",
  // "*.{css,vue}": "stylelint --fix",
  // "*.{js,json,ts,vue,css,md}": "prettier --write",
  "*.{png,jpeg,jpg,gif,svg}": ["node scripts/imagemin.mjs"],
};
