import $ from './jquery';

// -------------------------------------
//   Update header logo
// -------------------------------------

function updateHeaderLogo(headerLogo) {
    if (!headerLogo.image || !headerLogo.link) {
        return;
    }

    const LogoImgEl = $('#header h1[data-content-field="site-title"] img');
    const LogoLinkEl = $('#header h1[data-content-field="site-title"] a');

    // Update contents
    LogoImgEl.attr('src', headerLogo.image);
    LogoLinkEl.attr('href', headerLogo.link);
}

export default updateHeaderLogo;
