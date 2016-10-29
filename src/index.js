import getlocaleData from './get_locale_data';

import {
    updateHeaderLogo,
    updateHeaderNav
} from './update_header';

(async function ichefSquarespaceScripts() {
    try {
        const {
            headerLogo,
            headerNav
        } = await getlocaleData() || {};

        // Update header
        if (headerLogo) updateHeaderLogo(headerLogo);
        if (headerNav) updateHeaderNav(headerNav);
    } catch (error) {
        console.warn('no current locale data');
    }
}());
