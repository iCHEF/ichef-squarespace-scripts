/* eslint brace-style: 0 */
import cookies from 'js-cookie';

import { ALL_LOCALES, DEFAULT_LOCALE } from './all_locale_code.json';

const MUST_REDIRECT = 'MUST_REDIRECT';

// -------------------------------------
//   Get browser language
// -------------------------------------

function getBrowserLocaleCode() {
    if (!window.navigator) {
        return null;
    }

    return window.navigator.language.toLocaleLowerCase();
}

// -------------------------------------
//   Get & update locale code from or to URL
// -------------------------------------

function getLocaleCodeFromUrl(currentPathname) {
    const pathnameArray = currentPathname.split(/[\/\/]/);
    const localePath = pathnameArray[1];

    // Use default locale is not valid
    if (ALL_LOCALES.indexOf(localePath) < 0) {
        return DEFAULT_LOCALE;
    }

    // If DEFAULT_LOCALE, return must direct sign
    if (localePath === DEFAULT_LOCALE) {
        return MUST_REDIRECT;
    }

    // If event page, return `event-XXX`
    if (localePath === 'event') {
        return null;
    }

    return localePath;
}

function changeUrlLocaleCode(urlLocaleCode, newLocaleCode) {
    // If new locale code is not valid, do nothing
    if (ALL_LOCALES.indexOf(newLocaleCode) < 0) {
        return;
    }

    const currentPathname = window.location.pathname;
    let newPathname = '';

    // Case 1: If DEFAULT_LOCALE -> '/'
    if (urlLocaleCode === MUST_REDIRECT && newLocaleCode === DEFAULT_LOCALE) {
        const re = new RegExp(`^/${DEFAULT_LOCALE}`);
        newPathname = currentPathname.replace(re, '');
    }

    // Case 2: If '/' -> '/zh-tw'
    else if (urlLocaleCode === DEFAULT_LOCALE && newLocaleCode !== DEFAULT_LOCALE) {
        newPathname = `/${newLocaleCode}${currentPathname}`;
    }

    // Case 3: If '/zh-tw' -> '/'
    else if (urlLocaleCode !== DEFAULT_LOCALE && newLocaleCode === DEFAULT_LOCALE) {
        const re = new RegExp(`^/${urlLocaleCode}`);
        newPathname = currentPathname.replace(re, '');
    }

    // Case 4: If '/zh-hk' -> `/zh-tw`
    else {
        const re = new RegExp(`^/${urlLocaleCode}`);
        newPathname = currentPathname.replace(re, `/${newLocaleCode}`);
    }

    window.location.replace(newPathname);
}

// -------------------------------------
//   Get & set locale cookies
// -------------------------------------

export function setLocaleCookie(localeCode) {
    if (document.cookie) {
        cookies.set('locale', localeCode, {
            expires: 365
        });
    }
}

function getLocaleCookie() {
    return cookies.get('locale');
}

// -------------------------------------
//   Redirect to current locale
// -------------------------------------

function localeRedirect() {
    const urlLocaleCode = getLocaleCodeFromUrl(window.location.pathname);
    const browserLocaleCode = getBrowserLocaleCode();
    const cookieLocaleCode = getLocaleCookie();

    if (urlLocaleCode && browserLocaleCode) {
        if (!cookieLocaleCode) {
            setLocaleCookie(browserLocaleCode);
            // Redirect to browser locale site
            changeUrlLocaleCode(urlLocaleCode, browserLocaleCode);
        } else if (urlLocaleCode !== cookieLocaleCode) {
            // Redirect to cookie locale site
            changeUrlLocaleCode(urlLocaleCode, cookieLocaleCode);
        }
    }
}

export default localeRedirect;
