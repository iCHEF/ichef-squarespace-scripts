import getlocaleData from './get_locale_data';

import {
    updateHeaderLogo,
    updateHeaderNav
} from './update_header';

import {
    updateFooterCompanyInfo,
    updateFooterSocialLinks,
    updateFooterCurrentLocale,
    updateFooterNav
} from './update_footer';

(async function ichefSquarespaceScripts() {
    try {
        const {
            // Header contents
            headerLogo,
            headerNav,
            // Footer contents
            companyInfo,
            socialLinks,
            currentLocale,
            footerNav
        } = await getlocaleData() || {};

        // Update header contents
        if (headerLogo) updateHeaderLogo(headerLogo);
        if (headerNav) updateHeaderNav(headerNav);

        // Update footer contents
        if (companyInfo) updateFooterCompanyInfo(companyInfo);
        if (socialLinks) updateFooterSocialLinks(socialLinks);
        if (currentLocale) updateFooterCurrentLocale(currentLocale);
        if (footerNav) updateFooterNav(footerNav);
    } catch (error) {
        console.error(error);
    }
}());
