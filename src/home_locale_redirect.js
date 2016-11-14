import cookies from 'js-cookie';
import getUserLocale from './get_user_locale';

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
//   user located in supported area)
// -------------------------------------

async function homeLocaleRedirect() {
    // Check pathname is root path
    const isRootPath = window.location.pathname === '/';

    // Get user locale's code
    const userLocale = await getUserLocale() || DEFAULT_LOCALE;
    const isSupportedLocaleCode = isSupportedLocale(userLocale);

    // Check cookies
    const isVisitedBefore = !!getFirstTimeVisited();

    if (isRootPath && isSupportedLocaleCode && !isVisitedBefore) {
        // Set cookie
        setFirstTimeVisited(new Date().getTime());

        // Do not redirect if user located in DEFAULT_LOCALE
        if (userLocale !== DEFAULT_LOCALE) {
            window.location.replace(`/${userLocale}`);
        }
    }
}

export default homeLocaleRedirect;
