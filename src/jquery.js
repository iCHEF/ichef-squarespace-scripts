const $ = window.jQuery || window.$;

if (!$) {
    throw new Error('Please include jquery dependencies!');
}

export const ajax = $.ajax;
export default $;
