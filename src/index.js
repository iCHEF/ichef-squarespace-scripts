import getlocaleData from './get_locale_data';

import homeLocaleRedirect from './home_locale_redirect';
import updateHeaderLogo from './update_header_logo';

import {
    updateFooterCompanyInfo,
    updateFooterSocialLinks,
    updateFooterCurrentLocale
} from './update_footer';

import {
    applyGTM,
    applyFacebookPixel,
    applyZendeskChat
} from './seo';

(async function ichefSquarespaceScripts() {
    try {
        // Home page redirect
        homeLocaleRedirect();

        const {
            // Header contents
            headerLogo,
            // Footer contents
            companyInfo,
            socialLinks,
            currentLocale,
            // SEO
            seo
        } = await getlocaleData() || {};
        // Update header contents
        if (headerLogo) updateHeaderLogo(headerLogo);

        // Update footer contents
        if (companyInfo) updateFooterCompanyInfo(companyInfo);
        if (socialLinks) updateFooterSocialLinks(socialLinks);
        if (currentLocale) updateFooterCurrentLocale(currentLocale);

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
