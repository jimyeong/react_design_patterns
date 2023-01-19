import _ from "lodash";

export const utils = {
  setColor: (hex, percent) => {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }

    var r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);

    return (
      "#" +
      (0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
    );
  },
  pixelToRem: (px) => {
    const baseFontSize = 16;
    let value;
    if (typeof px === "string") {
      const filter = /\d+/g;
      value = px.match(filter)[0];
    } else {
      value = px;
    }
    const rem = value / baseFontSize;
    return `${rem}rem`;
  },
  setLowerCase: (string) => {
    if (typeof string === "string") {
      return string.toLowerCase();
    }
    return string;
  },
  debouncer: (func, timeInMs) => {
    return _.debounce(func, timeInMs);
  },
  createRandomId: () => {
    return Math.random().toString(36).substring(2, 11);
  },
  isDate: (date) => {
    if (
      Object.prototype.toString.call(date) === "[object Date]" &&
      !isNaN(date)
    ) {
      return true;
    }
    return false;
  },
  lineBreaker: (str) => {
    const processed = str.replaceAll("\n\n", "<br />");
    return processed;
  },
  truncate: (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  },
  checkNameValid: (name) => {
    const nameChecker = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
    const result = nameChecker.test(name);
    return result;
  },
  checkEmailValid: (email) => {
    const emailChecker =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailChecker.test(email);
    return result;
  },
  checkHtmlInjectionValid: (content) => {
    const htmlTagInjectionChecker = /(<([^>]+)>)/gi;
    const result = htmlTagInjectionChecker.test(content);
    const valid = result ? false : true;
    return valid;
  },
  checkNumber: (number) => {
    const numberChecker = /^[0-9]/g;
    const result = numberChecker.test(number);
    return result;
  },
  setRangeIndex: (reqNum, dataLength) => {
    const start = 0 + dataLength * (reqNum - 1);
    const end = start + dataLength - 1;

    return [start, end];
  },
  getUserBrowser: () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("Edg") != -1) return "Edge";
    if (userAgent.indexOf("chrome") != -1) return "Chrome";
    if (userAgent.indexOf("opera") != -1) return "Opera";
    if (userAgent.indexOf("staroffice") != -1) return "Star Office";
    if (userAgent.indexOf("webtv") != -1) return "WebTV";
    if (userAgent.indexOf("beonex") != -1) return "Beonex";
    if (userAgent.indexOf("chimera") != -1) return "Chimera";
    if (userAgent.indexOf("netpositive") != -1) return "NetPositive";
    if (userAgent.indexOf("phoenix") != -1) return "Phoenix";
    if (userAgent.indexOf("firefox") != -1) return "Firefox";
    if (userAgent.indexOf("safari") != -1) return "Safari";
    if (userAgent.indexOf("skipstone") != -1) return "SkipStone";
    if (userAgent.indexOf("netscape") != -1) return "Netscape";
    if (userAgent.indexOf("mozilla/5.0") != -1) return "Mozilla";
    if (userAgent.indexOf("msie") != -1) {
      let rv = -1;
      let ua;
      let re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      if (navigator.appName == "Microsoft Internet Explorer") {
        ua = navigator.userAgent;
      }
      if (re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1);
      }
      return "Internet Explorer " + rv;
    }
  },
  compareByChar: (a, b) => {
    const first = String(a).substring(0, 1).toLowerCase();
    const second = String(b).substring(0, 1).toLowerCase();
    if (first > second) return 1;
    if (first < second) return -1;
    if (first === second) return 0;
  },
};
