var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byClass

function byClass(context, selector) {
    if (typeof context === "string") {
        selector = context
        context = null
    }

    if (!context) {
        context = document
    }

    // IE8 doesn't support getElementsByClassName, but it supports QSA.
    return slice.call('getElementsByClassName' in context ?
        context.getElementsByClassName(selector) :
        context.querySelectorAll('.' + selector))
}
