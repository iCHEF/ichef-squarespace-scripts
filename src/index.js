import getlocaleData from './get_locale_data';

import {
    updateHeaderLogo,
    updateHeaderNav,
    showHeaderContainer
} from './update_header';

import {
    updateFooterCompanyInfo,
    updateFooterSocialLinks,
    updateFooterCurrentLocale,
    updateFooterNav
} from './update_footer';

import {
    applyGTM,
    applyFacebookPixel,
    applyZendeskChat
} from './seo';

import homeLocaleRedirect from './home_locale_redirect';

(async function ichefSquarespaceScripts() {
    try {
        // Home page redirect
        homeLocaleRedirect();

        const {
            // Header contents
            headerLogo,
            headerNav,
            // Footer contents
            companyInfo,
            socialLinks,
            currentLocale,
            footerNav,
            // SEO
            seo
        } = await getlocaleData() || {};

        // Update header contents
        if (headerLogo) updateHeaderLogo(headerLogo);
        if (headerNav) updateHeaderNav(headerNav);

        // Show hidden header container
        setTimeout(() => {
            showHeaderContainer();
        }, 100);

        // Update footer contents
        if (companyInfo) updateFooterCompanyInfo(companyInfo);
        if (socialLinks) updateFooterSocialLinks(socialLinks);
        if (currentLocale) updateFooterCurrentLocale(currentLocale);
        if (footerNav) updateFooterNav(footerNav);

        // Apply SEO(s)
        if (seo) {
            if (seo.gtm) applyGTM(seo.gtm);
            if (seo.pixel) applyFacebookPixel(seo.pixel);
            if (seo.zendesk) applyZendeskChat(seo.zendesk);
        }
    } catch (error) {
        // console.error('No current locale data');
    }
}());
