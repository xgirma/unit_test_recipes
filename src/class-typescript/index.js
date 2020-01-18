"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Contact = /** @class */ (function() {
  function Contact(name) {
    this.contactName = name;
  }
  Object.defineProperty(Contact.prototype, "name", {
    get() {
      return this.contactName;
    },
    set(name) {
      this.contactName = name;
    },
    enumerable: true,
    configurable: true
  });
  return Contact;
})();
exports.default = Contact;
