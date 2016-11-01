import $ from './jquery';
import { setLocaleCookie } from './locale_redirect';
import { DEFAULT_LOCALE } from './all_locale_code.json';

const LANGUAGE_PAGE_PATHNAME = '/language';

// -------------------------------------
//   Change language page actions
//   (This scripts only work in language page)
// -------------------------------------

function replaceLocaleLinksList() {
    $(document).ready(() => {
        const currenPathname = window.location.pathname;
        const LocaleLinksList = $('.actions ul a');

        if (currenPathname === LANGUAGE_PAGE_PATHNAME || currenPathname === `${LANGUAGE_PAGE_PATHNAME}/`) {
            LocaleLinksList.each((index, element) => {
                const LocaleLink = $(element);
                const linkHref = LocaleLink.attr('href');

                LocaleLink.click((event) => {
                    event.preventDefault();

                    // Set locale cookie
                    setLocaleCookie(linkHref.replace(/\//, '') || DEFAULT_LOCALE);

                    // Direct it!
                    window.location.href = linkHref;
                });
            });
        }
    });
}

export default replaceLocaleLinksList;
