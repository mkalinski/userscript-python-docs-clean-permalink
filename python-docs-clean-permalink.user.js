// ==UserScript==
// @name        python-docs-clean-permalink
// @namespace   https://github.com/mkalinski
// @version     1.0
// @description Copy a clean permalink on click on header anchor for python documentation
// @match       https://docs.python.org/*/library/*
// @grant       GM_notification
// @grant       GM_setClipboard
// @run-at      document-end
// @inject-into auto
// @homepageURL https://github.com/mkalinski/userscript-python-docs-clean-permalink
// ==/UserScript==
(() => {
    'use strict';

    document.querySelectorAll('.headerlink').forEach((headA) => {
        // Assuming this will only run once per page load,
        // so don't bother removing the listener.
        headA.addEventListener('click', () => {
            const hrefURL = new URL(headA.href);
            // Get rid of this ugly thing.
            hrefURL.searchParams.delete('highlight');
            // Now put the result into clipboard and notify.
            const href = hrefURL.toString();
            GM_setClipboard(href);
            GM_notification(`Copied to clipboard: ${href}`);
        });
    });
})();
