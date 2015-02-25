/**
 * jquery.ancestor.js
 *
 * @description jQuery Ancestor Plugin
 * @version     0.1.0
 * @author      Vladislav Pavlov
 * @date        2015/24/02
 *
 * @copyright (c )Copyright 2015 Vladislav Pavlov.
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
;
(function ($) {
    /**
     *
     * @description method creates an ancestor selector
     * that returns the union of ancestors of the matched children
     * satisfying the selector criteria.
     *
     *
     * @method
     * @name jQuery#ancestors
     * @param {string} selector string with <,> chars to detect ancestors
     * @returns {jQuery} returns ancestors as jQuery element
     */
    return $.fn.ancestors = function (selector) {
        selector = selector.replace(/ /g, '');
        var anc,
            elems,
            first = 0,
            re = /(?=[<|>])/,
            signRe = /[<|>]/,
            validationRe = /(\s*[*]?[#\.]?[-\w]*)+([<|>]+(\s*[*#\.]?[-\w]*)+)+/i,
            ancestors = selector.split(re);
        if (!validationRe.test(selector)) {
            throw new Error("Selector is not valid");
        }
        else if (signRe.test(ancestors[0])) {
            elems = $(document.documentElement);
        } else {
            elems = $(ancestors[0]);
            first = 1;
        }
        for (var i = first; i < ancestors.length; i++) {
            anc = ancestors[i];
            if (anc[0] === '>') {
                if (!anc.slice(1)) return elems;
                elems = $(elems).find(anc.slice(1)).parent();

            } else if (anc[0] === '<') {
                elems = $(elems).filter(anc.slice(1));
            }
        }
        return elems;
    }
}(jQuery));