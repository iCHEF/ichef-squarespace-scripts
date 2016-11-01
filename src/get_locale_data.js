import { ajax } from 'jquery';

const LOCALE_JSON_HOST = '//ichef.github.io/ichef-squarespace-scripts/locale_data';

// -------------------------------------
//   Get localization code from URL
// -------------------------------------

function getLocaleCode(currentPathname) {
    const pathnameArray = currentPathname.split(/[\/\/]/);
    const localePath = pathnameArray[1];

    // If event page, return `event-XXX`
    if (localePath === 'event') {
        return `event/${pathnameArray[2]}`;
    }

    return localePath;
}

// -------------------------------------
//   Get localize data
// -------------------------------------

function getLocaleData() {
    const localeCode = getLocaleCode(window.location.pathname);

    if (!localeCode) {
        return null;
    }

    return ajax(`${LOCALE_JSON_HOST}/${localeCode}.json`);
}

export default getLocaleData;
