import cookies from 'js-cookie';

import { ALL_LOCALES, DEFAULT_LOCALE } from './all_locale_code.json';

// -------------------------------------
//   locale code
// -------------------------------------

function getBrowserLocale() {
    if (!window.navigator) {
        return null;
    }

    return window.navigator.language.toLocaleLowerCase();
}

function isSupportedLocale(localeCode) {
    if (ALL_LOCALES.indexOf(localeCode) < 0) {
        return false;
    }

    return true;
}

// -------------------------------------
//   Record first visited time
// -------------------------------------

function setFirstTimeVisited(currentTime) {
    if (document.cookie) {
        cookies.set('firstTimeVisited', currentTime, {
            expires: 365
        });
    }
}

function getFirstTimeVisited() {
    return cookies.get('firstTimeVisited');
}

// -------------------------------------
//   Home locale redirect
//   (Only work when first-time vist and
//   located in supported area)
// -------------------------------------

function homeLocaleRedirect() {
    // Check pathname is root path
    const isRootPath = window.location.pathname === '/';
    // Get browserLocaleCode
    const browserLocaleCode = getBrowserLocale();
    const isSupportedLocaleCode = isSupportedLocale(browserLocaleCode);
    // Check cookies
    const isVisitedBefore = !!getFirstTimeVisited();

    if (isRootPath && isSupportedLocaleCode && !isVisitedBefore) {
        // Set cookie
        setFirstTimeVisited(new Date().getTime());

        // Do not redirect if located in DEFAULT_LOCALE
        if (browserLocaleCode !== DEFAULT_LOCALE) {
            window.location.replace(`/${browserLocaleCode}`);
        }
    }
}

export default homeLocaleRedirect;
