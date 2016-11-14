import { ajax } from './jquery';

import { COUNTRY_LOCALES } from './all_locale_code.json';

// -------------------------------------
//   Get language code from browser's
//   navigator
// -------------------------------------

function getNavigatorLanguage() {
    if (!window.navigator) {
        return null;
    }

    return window.navigator.language.toLocaleLowerCase();
}

// -------------------------------------
//   Get contry code from user IP
// -------------------------------------

function getUserIpInformation() {
    return ajax('//ipinfo.io/json');
}

// -------------------------------------
//   Get user's locale
// -------------------------------------

async function getUserLocale() {
    try {
        const userIpInformation = await getUserIpInformation();
        const userCountry = userIpInformation.country.toLowerCase();

        return COUNTRY_LOCALES[userCountry];
    } catch (error) {
        const navigatorLanguage = getNavigatorLanguage();

        return navigatorLanguage;
    }
}

export default getUserLocale;
