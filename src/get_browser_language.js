import { ajax } from './jquery';

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
//   Get language code from request header
//   ['Accept-Language']
// -------------------------------------

function getPreferLanguages(acceptedLanguage) {
    if (!acceptedLanguage) {
        throw new Error('Accept Language is empty!');
    }

    return acceptedLanguage.split(/;/)[0];
}

function getLanguagesFromRequestHeaders() {
    return ajax('//ajaxhttpheaders.appspot.com', { dataType: 'jsonp' })
        .then((headers) => {
            const preferLanguages = getPreferLanguages(headers['Accept-Language']);

            return preferLanguages.split(/,/)[0];
        });
}

// -------------------------------------
//   Get the language Code
// -------------------------------------

async function getBrowserLanguage() {
    try {
        const preferLanguage = await getLanguagesFromRequestHeaders();

        return preferLanguage.toLowerCase();
    } catch (error) {
        const navigatorLanguage = getNavigatorLanguage();

        return navigatorLanguage;
    }
}

export default getBrowserLanguage;
