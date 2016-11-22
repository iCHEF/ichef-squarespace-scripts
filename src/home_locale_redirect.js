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
//   Home locale redirect
// -------------------------------------

async function homeLocaleRedirect() {
    if (window.location.pathname === '/') {
        // Get user locale's code
        const userLocale = await getUserLocale() || DEFAULT_LOCALE;

        // Do not redirect if user located in DEFAULT_LOCALE
        if (isSupportedLocale(userLocale) && userLocale !== DEFAULT_LOCALE) {
            window.location.replace(`/${userLocale}`);
        }
    }
}

export default homeLocaleRedirect;
