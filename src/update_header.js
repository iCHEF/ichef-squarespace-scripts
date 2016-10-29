import $ from 'jquery';

import NewNavBody from './NewNavBody';

// -------------------------------------
//   Update header logo
// -------------------------------------

export function updateHeaderLogo(headerLogo) {
    if (!headerLogo.image || !headerLogo.link) {
        return;
    }

    const LogoImgEl = $('#header h1[data-content-field="site-title"] img');
    const LogoLinkEl = $('#header h1[data-content-field="site-title"] a');

    // Update contents
    LogoImgEl.attr('src', headerLogo.image);
    LogoLinkEl.attr('href', headerLogo.link);
}


// -------------------------------------
//   Update header navigation
// -------------------------------------

export function updateHeaderNav(headerNav) {
    const DesktopNav = $('#desktopNav ul');
    const MobileNav = $('#mobileNav ul');

    const newNavBody = new NewNavBody(headerNav).result();

    DesktopNav.html(newNavBody);
    MobileNav.html(newNavBody);
}
