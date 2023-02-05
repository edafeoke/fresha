window.cookies = {
  set: function (key, value, options = {}) {
    var expires = 1000 * 60 * 60 * 24 * (options.expires || 1);
    var date = new Date();
    date.setTime(date.getTime() + expires);
    document.cookie =
      key +
      "=" +
      value +
      "; expires=" +
      date.toUTCString() +
      "; domain=.fresha.com; path=/";
  },
  get: function (key) {
    var match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
    if (match) return match[2];
  },
};

window.setLocale = function (requestedLocale) {
  if (requestedLocale !== "en") {
    window.cookies.set("freshaLocale", requestedLocale, { expires: 1 });
  }
};
