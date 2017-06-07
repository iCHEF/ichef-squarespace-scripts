import getlocaleData from './get_locale_data';

import {
    showHeaderContainer
} from './update_header';

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

import homeLocaleRedirect from './home_locale_redirect';

(async function ichefSquarespaceScripts() {
    try {
        // Home page redirect
        homeLocaleRedirect();

        const {
            // Footer contents
            companyInfo,
            socialLinks,
            currentLocale,
            // SEO
            seo
        } = await getlocaleData() || {};

        // Show hidden header container
        setTimeout(() => {
            showHeaderContainer();
        });

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
