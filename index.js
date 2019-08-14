exports.getBrowserLocale = function() {
  const locale = getLocale();
  return locale;
};
exports.getShortBrowserLocale = function() {
  const locale = getLocale();
  locale.slice(0, 2);
  return locale.slice(0, 2);
};

exports.getUserLanguages = function() {
  return navigator.languages
    ? navigator.languages
    : navigator.language || navigator.userLanguage;
};

function getLocale() {
  const locale = navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage;
  return locale;
}
