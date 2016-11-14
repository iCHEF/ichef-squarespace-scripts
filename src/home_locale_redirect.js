import cookies from 'js-cookie';
import getBrowserLanguage from './get_browser_language';

import { ALL_LOCALES, DEFAULT_LOCALE } from './all_locale_code.json';

// -------------------------------------
//   Check supported locale
// -------------------------------------

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

async function homeLocaleRedirect() {
    // Check pathname is root path
    const isRootPath = window.location.pathname === '/';

    // Get browserLocaleCode
    const browserLocaleCode = await getBrowserLanguage();
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
