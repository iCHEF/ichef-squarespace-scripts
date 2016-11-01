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

import {
    applyGTM,
    applyFacebookPixel,
    applyZendeskChat
} from './seo';

import localeRedirect from './locale_redirect';
import replaceLocaleLinksList from './replace_locale_links_list';

(async function ichefSquarespaceScripts() {
    try {
        // Redirect to current locale site
        localeRedirect();

        // Replace locale links list
        replaceLocaleLinksList();

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
