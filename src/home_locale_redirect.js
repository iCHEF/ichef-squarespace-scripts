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
//   Record last visited time
// -------------------------------------

function setLastTimeVisited(currentTime) {
    if (document.cookie) {
        cookies.set('lastTimeVisted', currentTime, {
            expires: 365
        });
    }
}

function getLastTimeVisited() {
    return cookies.get('lastTimeVisted');
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
    const isVisitedBefore = !!getLastTimeVisited();

    if (isRootPath && isSupportedLocaleCode && !isVisitedBefore) {
        // Set cookie
        setLastTimeVisited(new Date().getTime());

        // Do not redirect if located in DEFAULT_LOCALE
        if (browserLocaleCode !== DEFAULT_LOCALE) {
            window.location.replace(`/${browserLocaleCode}`);
        }
    }
}

export default homeLocaleRedirect;
