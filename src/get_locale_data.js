import { ajax } from './jquery';

import {
    ALL_LOCALES,
    DEFAULT_LOCALE,
    LOCALE_HOST
} from './all_locale_code.json';

// -------------------------------------
//   Get locale's JSON name
// -------------------------------------

function getLocaleJsonName(currentPathname) {
    const pathnameArray = currentPathname.split(/[\/\/]/);
    const localePath = pathnameArray[1];

    // If not valid locale path, use default
    if (ALL_LOCALES.indexOf(localePath) < 0) {
        return `${DEFAULT_LOCALE}/website`;
    }

    // If event site
    if (localePath === 'event') {
        return `event/${pathnameArray[2]}`;
    }

    // If blog site
    if (pathnameArray[2] === 'blog') {
        return `${localePath}/blog`;
    }

    return `${localePath}/website`;
}

// -------------------------------------
//   Get localize data
// -------------------------------------

function getLocaleData() {
    const localeJsonName = getLocaleJsonName(window.location.pathname);

    return ajax(`${LOCALE_HOST}/${localeJsonName}.json`);
}

export default getLocaleData;
