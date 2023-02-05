window.onload = function () {
  document.body.classList.add("font-enabled");
  var styles = [
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/normalize-QA522MTK.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/base-2CM6TXSD.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/muli-5BVNBUQB.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/StyledLink-UVBZV3WE.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Testimonial-SQSHHLH3.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Text-ZEFPS45G.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/StaticPageSection-J366V747.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/SectionTitle-WV5UPV7T.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Hero-3EY7YIVC.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Icon-NZSZT3A5.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Button-FP4IDDNH.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/BestApp-2WN3PQCT.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Highlight-MCKGGD2A.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/SoftwareSolution-GSO6QO3G.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/SolutionList-7UXJPGKQ.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/SectionDescription-VKL2SL6R.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/RegisterBusiness-C2GSQ4PQ.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Tile-BCXYEUVM.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/WantToKnowMore-B2JTMOC6.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Features-5S5VZGO3.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CircleGradient-EQX4MGIW.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CheckList-745M3KB5.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/FeaturesContent-6H2N2YDX.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/StoreIcon-SNGMN33N.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/AppCard-ZBVJ2OIF.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/DownloadApp-KQZ3G65N.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CarouselPagination-DQKCZ7M4.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Carousel-2WRVW7MK.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CarouselLinks-HROFY6OV.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/BusinessTypesLinks-HLEGC4EF.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/LanguageSwitcher-MTP6TPJN.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Background-CRDXVTA3.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Footer-GOK4INLQ.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/LanguagesLinks-55TM3M7R.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/StickyFooter-Z7Y5RWZJ.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Navigation-YWKKN2Y5.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CarouselReviews-5LYINDAT.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/CookieBanner-FJQ7TNQK.css",
    "https://cdn-static-business-pages-spa.fresha.com/build/_assets/Toast-O2GOOTIZ.css",
  ];
  styles.forEach((style) => {
    var styleEl = document.createElement("link");
    styleEl.rel = "stylesheet";
    styleEl.href = style;
    document.head.appendChild(styleEl);
  });
  function searchParamsToJson(searchParams) {
    return [...searchParams.entries()].reduce((memo, [key, value]) => {
      memo[key] = value;
      return memo;
    }, {});
  }

  (function () {
    function getMarketingParams(urlParams) {
      var allowedMarketingParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gclid",
      ];
      var urlParams = new URLSearchParams(window.location.search);
      var filteredParams = "";

      allowedMarketingParams.forEach((param) => {
        var value = urlParams.get(param);
        if (value) {
          filteredParams = filteredParams + "&" + param + "=" + value;
        }
      });

      return filteredParams.replace("&", "?");
    }

    function setLeadSourceLangCookie() {
      var leadSourceLang = "en";
      window.cookies.set("lead_source_lang", leadSourceLang, {
        expires: 7,
      });
    }

    function setParamsCookie(filteredParams) {
      var currentCookie = window.cookies.get("marketing_utm");

      if (!filteredParams) return;
      if (!currentCookie || filteredParams) {
        window.cookies.set("marketing_utm", filteredParams, {
          expires: 7,
        });
      }
    }

    function updateLinksWithUTMs(filteredParams) {
      var params = filteredParams;
      var domain = ".fresha.com";

      if (!params) {
        params = window.cookies.get("marketing_utm");
      }

      if (!params) return;

      var links = window.document.querySelectorAll("a");

      links.forEach(function (link) {
        if (link.href.includes(domain)) {
          link.href =
            link.href +
            (link.href.includes("?") ? params.replace("?", "&") : params);
        }
      });
    }

    var filteredParams = getMarketingParams();
    setParamsCookie(filteredParams);
    updateLinksWithUTMs(filteredParams);
    setLeadSourceLangCookie();
  })();

  function handleLinkClick(e) {
    var requestedLocale = (e.target.href.match(/\/([a-zA-Z]{2})\//) || [
      0,
      "en",
    ])[1];
    window.setLocale(requestedLocale);
  }

  var links = document.querySelectorAll(".js-language-links a");
  var targetParams = searchParamsToJson(
    new URL(window.location.href).searchParams
  );
  [...links].forEach((el) => {
    var url = new URL(el.href);
    var sourceParams = searchParamsToJson(new URL(el.href).searchParams);
    Object.entries({ ...sourceParams, ...targetParams }).forEach(
      ([key, value]) => url.searchParams.set(key, value)
    );
    el.href = url.toString();
  });
  links.forEach((link) => link.addEventListener("click", handleLinkClick));

  var referralCode = window.cookies.get("referral_code");
  if (referralCode) {
    var signupLinks = document.querySelectorAll(".signupLink");
    signupLinks.forEach((el) => {
      var url = new URL(el.href);
      url.searchParams.set("referral_code", referralCode);
      el.href = url.toString();
    });
  }
};
