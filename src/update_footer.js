import $ from './jquery';
import NewNavBody from './NewNavBody';

// -------------------------------------
//   Update footer's company info
// -------------------------------------

export function updateFooterCompanyInfo(companyInfo) {
    $('#footerBlocks h3').each((index, h3El) => {
        const TargetEl = h3El.nextSibling || h3El;
        const targetInfo = companyInfo[index];

        if (targetInfo) {
            TargetEl.innerHTML = targetInfo;
        } else {
            console.warn(`Cannot apply info for ${TargetEl}`);
        }
    });
}

// -------------------------------------
//   Update footer's social links
// -------------------------------------

export function updateFooterSocialLinks(socialLinks) {
    const SocialLinksNav = $('#footerBlocks .socialaccountlinks-v2-block nav');

    Object.keys(socialLinks).forEach((socialLinkName) => {
        const socialLinkUrl = socialLinks[socialLinkName];
        const SocialLinksItem = $(`a.${socialLinkName}`, SocialLinksNav);

        SocialLinksItem.attr('href', socialLinkUrl);
    });
}

// -------------------------------------
//   Update footer's current locale
// -------------------------------------

export function updateFooterCurrentLocale(currentLocale) {
    if (!currentLocale.name || !currentLocale.image) {
        return;
    }

    const LocaleLinks = $('#footerBlocks a[href="/language"]');
    LocaleLinks.each((index, element) => {
        switch (index) {
            // Locale Image
            case 0:
                $(element).html(`<img src="${currentLocale.image}" />`);
                break;
            // Locale Text Link
            case 1:
                $(element).html(currentLocale.name);
                break;
            default:
                break;
        }
    });
}

// -------------------------------------
//   Update footer navigation
// -------------------------------------

export function updateFooterNav(footerNav) {
    const FooterNav = $('#footer #secondaryNav ul');
    const newNavBody = new NewNavBody(footerNav).result();

    FooterNav.html(newNavBody);
}
