"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact(name) {
        this.contactName = name;
    }
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this.contactName;
        },
        set: function (name) {
            this.contactName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());
exports.default = Contact;
