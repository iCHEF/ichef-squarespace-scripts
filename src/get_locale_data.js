import { ajax } from 'jquery';

const LOCALE_JSON_HOST = '//ichef.github.io/ichef-squarespace-scripts/locale_data';

// -------------------------------------
//   Get localization code from URL
// -------------------------------------

function getLocaleCode(currentPathname) {
    return currentPathname.split(/[\/\/]/)[1];
}

// -------------------------------------
//   Get localize data
// -------------------------------------

function getLocaleData() {
    const localeCode = getLocaleCode(window.location.pathname);

    return ajax(`${LOCALE_JSON_HOST}/${localeCode}.json`);
}

export default getLocaleData;
