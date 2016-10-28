/*
 * 1. Type could be 'index', 'page', 'folders', and 'external'.
 * 2. For example:
 *   {display: "Barry", link: "https://www.facebook.com/profile.php?id=100000289173930", type: "index"},
 * 3. Another example:
 *   {display: "Apple", type: "folders", links: [
        {display: "Mac", link: "https://apple.com/mac"},
        {display: "iPhone", link: "https://apple.com/iphone"},
        {display: "iPad", link: "https://apple.com/ipad"}
     ]},
 */
+(function() {
var localizationSettings = {
  '/zh-tw': {
    logo: {
      image: 'https://icheftw.squarespace.com/s/iCHEF-index-Logo-white.png',
      link: 'http://www.ichefpos.com/zh-tw'
    },
    headerNav: [
      {display: "介面與流程", link: "http://www.ichefpos.com/zh-tw/interface-flow", type: "index"},
      {display: "報表與管理", link: "http://www.ichefpos.com/zh-tw/analytics-management", type: "index"},
      {display: "系統與彈性", link: "http://www.ichefpos.com/zh-tw/system-flexibility", type: "index"},
      {display: "使用案例", link: "http://www.ichefpos.com/zh-tw/user-case", type: "index"},
      {display: "價格", link: "http://www.ichefpos.com/zh-tw/pricing", type: "index"},
      {display: "LOGIN", link: "https://admin.ichef.tw", type: "external"},
    ],
    footerNav: [
      {display: "洽詢與購買", link: "http://www.ichefpos.com/zh-tw/contact-ichef", type: "page"},
      {display: "關於資廚", type: "folders", links: [
        {display: "關於資廚", link: "http://www.ichefpos.com/zh-tw/about-ichef"},
        {display: "媒體報導", link: "http://www.ichefpos.com/zh-tw/media-report"},
        {display: "誠徵夥伴", link: "http://www.ichefpos.com/zh-tw/join-us"},
        {display: "企業方案", link: "http://www.ichefpos.com/zh-tw/enterprise-program"},
      ]},
      {display: "得獎設計", type: "folders", links: [
        {display: "老闆心聲", link: "http://www.ichefpos.com/zh-tw/ichef-story"},
        {display: "設計理念", link: "http://www.ichefpos.com/zh-tw/design-concept"},
        {display: "得獎設計", link: "http://www.ichefpos.com/zh-tw/design-award"},
        {display: "系統規格", link: "http://www.ichefpos.com/zh-tw/specification"},
      ]},
      {display: "電子發票", link: "http://www.ichefpos.com/zh-tw/e-invoice", type: "index"},
      {display: "中信支付", type: "folders", links: [
        {display: "行動刷卡", link: "http://www.ichefpos.com/zh-tw/ctbc-mpos"},
        {display: "手機支付", link: "http://www.ichefpos.com/zh-tw/ctbc-mobile-pay"},
      ]},
      {display: "iCHEF Club", link: "http://www.ichefpos.com/zh-tw/ichef-club", type: "page"},
      {display: "服務支援", link: "http://www.ichefpos.com/zh-tw/service-support", type: "index"},
      {display: "Q&A", link: "http://www.ichefpos.com/zh-tw/qna", type: "page"},
    ],
    companyInfo: [
      '資廚管理顧問股份有限公司 iCHEF CO., LTD.',
      '<a href="https://goo.gl/maps/z1jLSQ5LZoG2">台北市信義區松山路 132 號 3 樓<br/>3F., No. 132, Songshan Rd., Xinyi Dist., Taipei City 11090, Taiwan</a>',
      '免費客服專線<br/><a href="tel:0800889055">TEL: 0800-889-055</a>'
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/icheftw",
      youtube: "https://www.youtube.com/user/iCHEFPoS",
      email: "mailto:service@ichef.com.tw"
    },
    currentLocale: {
      image: "https://icheftw.squarespace.com/s/flag-taiwan.png",
      display: "台灣中文",
    },
  },
 '/zh-hk': {
    logo: {
      image: 'https://icheftw.squarespace.com/s/iCHEF-HK-logo-white.png',
      link: 'http://www.ichefpos.com/zh-hk'
    },
    headerNav: [
      {display: "介面與流程", link: "http://www.ichefpos.com/zh-hk/interface-flow", type: "index"},
      {display: "報表與管理", link: "http://www.ichefpos.com/zh-hk/analytics-management", type: "index"},
      {display: "系統與彈性", link: "http://www.ichefpos.com/zh-hk/system-flexibility", type: "index"},
      {display: "價格", link: "http://www.ichefpos.com/zh-hk/pricing", type: "index"},
      {display: "LOGIN", link: "https://admin.ichef.tw", type: "external"},
    ],
    footerNav: [
      {display: "洽詢與購買", link: "http://www.ichefpos.com/zh-hk/contact-ichef", type: "page"},
      {display: "關於資廚", type: "folders", links: [
        {display: "關於資廚", link: "http://www.ichefpos.com/zh-hk/about-ichef"},
        {display: "媒體報導", link: "http://www.ichefpos.com/zh-hk/media-report"},
      ]},
      {display: "得獎設計", type: "folders", links: [
        {display: "老闆心聲", link: "http://www.ichefpos.com/zh-hk/ichef-story"},
        {display: "設計理念", link: "http://www.ichefpos.com/zh-hk/design-concept"},
        {display: "得獎設計", link: "http://www.ichefpos.com/zh-hk/design-award"},
        {display: "系統規格", link: "http://www.ichefpos.com/zh-hk/specification"},
      ]},
      {display: "服務支援", link: "http://www.ichefpos.com/zh-hk/service-support", type: "index"},
      {display: "Q&A", link: "http://www.ichefpos.com/zh-hk/qna", type: "page"},
      {display: "限時優惠", link: "http://www.ichefpos.com/zh-hk/bundle-price", type: "page"},
    ],
    companyInfo: [
      '資廚(香港)管理顧問股份有限公司<br/>iCHEF (Hong Kong) CO., LIMITED',
      '<a href="https://goo.gl/maps/PL1jDk5NATy">香港九龍觀塘興業街 16-18 號，美興工業大廈 A 座 9 樓 9 室<br/>Room 9, 9/F block A, Mai Hing Industrial Building, 16-18, Hing Yip Street, Kwun Tong, Kowloon, Hong Kong</a>',
      '免費客服專線<br/><a href="tel:28166615">TEL: 2816-6615</a>'
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/ichefhk/",
      youtube: "https://www.youtube.com/user/iCHEFPoS",
      email: "mailto:service@ichef.com.hk"
    },
    currentLocale: {
      image: "https://icheftw.squarespace.com/s/flag-hongkong.png",
      display: "香港中文",
    },
  },
    '/event/no-more-doubts': {
    logo: {
      image: 'https://icheftw.squarespace.com/s/no-more-doubts_logo.png',
      link: 'http://www.ichefpos.com/event/no-more-doubts'
    },
    headerNav: [
      {display: "買 POS 系統想買斷", link: "http://www.ichefpos.com/event/no-more-doubts-1", type: "page"},
      {display: "賣 POS 的庫存功能", link: "http://www.ichefpos.com/event/no-more-doubts-2", type: "page"},
      {display: " POS 用不到那麼好", link: "http://www.ichefpos.com/event/no-more-doubts-3", type: "page"}
    ],
    footerNav: [
      {display: "iCHEF 餐飲 POS", link: "http://www.ichefpos.com/zh-tw", type: "external"},
      {display: "iCHEF Club", link: "http://www.ichefpos.com/zh-tw/ichef-club", type: "external"},
      {display: "就愛開餐廳", link: "http://blog.ichef.tw/", type: "external"},
    ],
    companyInfo: [
      '資廚管理顧問股份有限公司 iCHEF CO., LTD.',
      '11090 台北市信義區松山路132號3樓<br>3F., No. 132, Songshan Rd., Xinyi Dist., Taipei City 11090, Taiwan',
      '免費客服專線<br><a href="tel:0800889055">0800-889-055</a>'
    ],
  },
};
// Code ----------------------------------------------------------------------------------------------------------------
var $footerBlocks = $("#footerBlocks");
function getCurrentLocalizationSettings() {
  for (var attrName in localizationSettings) {
    var regExp = new RegExp(attrName, "i");
    if (location.pathname.match(regExp)) {
      console.log("Matched attr name: " + attrName);
      return localizationSettings[attrName];
    }
  }
}
function applyLocalizationSettings(settings) {
  var companyInfo = settings.companyInfo;
  if (companyInfo) {
    applyCompanyInfo(companyInfo);
  }
  var socialLinks = settings.socialLinks;
  if (socialLinks) {
    applySocialLinks(socialLinks);
  }
  var logo = settings.logo;
  if (logo) {
    applyLogoUrl(logo);
  }
  var headerNav = settings.headerNav;
  if (headerNav) {
    updateHeaderNav(headerNav);
  }
  var footerNav = settings.footerNav;
  if (footerNav) {
    updateFooterNav(footerNav);
  }
  var currentLocale = settings.currentLocale;
  if (currentLocale) {
    updateCurrentLocale(currentLocale);
  }
}
function getNavListClassName(navType) {
  if (navType === "index") { return "index-collection"; }
  else if (navType === "page") { return "page-collection"; }
  else if (navType === "folders") { return "folders-collection folder"; }
  else if (navType === "external") { return "external-link"; }
  else { console.warn("Get unknown type: " + navType); return ""; }
}
function getNavFolderLiBody(navItem) {
  var result = '';
  var clsName = getNavListClassName(navItem.type);
  var randomFolderToggleId = ("" + Math.random()).substring(2);
  var folderToggleName = "folder-toggle-" + randomFolderToggleId;
  result += '<li class="' + clsName + '">\n';
  result += '  <div class="folder-parent">\n';
  result += '    <input type="checkbox" class="folder-toggle-box hidden"\n';
  result += '           name="' + folderToggleName + '"\n';
  result += '           id="' + folderToggleName + '">\n';
  result += '    <label for="' + folderToggleName + '" class="folder-toggle-label">\n';
  result += '      <a aria-haspopup="true"><span>' + navItem.display + '</span></a>\n';
  result += '    </label>\n';
  result += '    <div class="folder-child-wrapper">\n';
  result += '      <ul class="folder-child">\n';
  for (var childNavIdx=0; childNavIdx<navItem.links.length; ++childNavIdx) {
    var childNavItem = navItem.links[childNavIdx];
    result += '        <li>\n';
    result += '          <a href="' + childNavItem.link + '"><span>' + childNavItem.display + '</span></a>\n';
    result += '        </li>\n';
  }
  result += '      </ul>\n';  // folder-child
  result += '    </div>\n';  // folder-child-wrapper
  result += '  </div>\n';  // folder-parent
  result += '</li>\n';
  return result;
}
function getNavNormalLiBody(navItem) {
  var linkTarget = navItem.type === "external" ? "_blank" : "_self";
  var clsName = getNavListClassName(navItem.type);
  var result = '';
  result += '<li class="' + clsName + '">\n';
  result += '  <a href="' + navItem.link + '" target="' + linkTarget + '"><span>' + navItem.display + '</span></a>\n';
  result += '</li>\n';
  return result;
}
function getNavUlBody(nav) {
  var result = '';
  for (var idx=0; idx<nav.length; ++idx) {
    var navItem = nav[idx];
    var clsName = getNavListClassName(navItem.type);
    if (navItem.type === "folders") {
      result += getNavFolderLiBody(navItem);
    } else {
      result += getNavNormalLiBody(navItem);
    }
  }
  return result
}
function updateHeaderNav(headerNav) {
  $("ul", "#mobileNav, #desktopNav").html(getNavUlBody(headerNav));
}
function updateFooterNav(footerNav) {
  $("ul", "#secondaryNav").html(getNavUlBody(footerNav));
}
function applyCompanyInfo(companyInfo) {
  $("h3", $footerBlocks).each(function(idx, h3Elem) {
    var targetElem = h3Elem.nextSibling || h3Elem;
    var targetInfo = companyInfo[idx];
    if (targetInfo) {
      $(targetElem).html(targetInfo);
    } else {
      console.warn("Cannot get info for " + h3Elem);
    }
  });
}
function applyLogoUrl(logoUrl) {
  var imageUrl = logoUrl.image;
  var linkUrl = logoUrl.link;
  if (!imageUrl || !linkUrl) {
    return;
  }
  $("#header h1 img").attr("src", imageUrl).parent("a").attr("href", linkUrl);
}
function applySocialLinks(socialLinks) {
  var $socialLinksNav = $(".socialaccountlinks-v2-block nav", $footerBlocks);
  for (var socialLinkName in socialLinks) {
    var socialLinkUrl = socialLinks[socialLinkName];
    $("a." + socialLinkName, $socialLinksNav).attr("href", socialLinkUrl);
  }
}
function updateCurrentLocale(currentLocale) {
  $("a[href='/language']", $footerBlocks).each(function(idx, elem) {
    if (idx === 0) {
      $(elem).html('<img src="' + currentLocale.image + '">');
    } else if (idx === 1) {
      $(elem).html(currentLocale.display);
    }
  });
}
// Apply ---------------------------------------------------------------------------------------------------------------
var localizationSettings = getCurrentLocalizationSettings();
if (typeof localizationSettings !== 'undefined') {
  applyLocalizationSettings(localizationSettings);
}
})();
