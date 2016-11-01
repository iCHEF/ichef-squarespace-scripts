import { ajax } from 'jquery';
import { ALL_LOCALES, DEFAULT_LOCALE } from './all_locale_code.json';

const LOCALE_JSON_HOST = '//ichef.github.io/ichef-squarespace-scripts/locale_data';

// -------------------------------------
//   Get localization code from URL
// -------------------------------------

function getLocaleCode(currentPathname) {
    const pathnameArray = currentPathname.split(/[\/\/]/);
    const localePath = pathnameArray[1];

    // Validate is correct locale code
    if (ALL_LOCALES.indexOf(localePath) < 0) {
        return null;
    }

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
    const localeCode = getLocaleCode(window.location.pathname) || DEFAULT_LOCALE;

    return ajax(`${LOCALE_JSON_HOST}/${localeCode}.json`);
}

export default getLocaleData;
