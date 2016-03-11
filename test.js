'use strict';

var validateEmail = require("./index");

var validSupported =
[
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org",
	"01234567890@numbers-in-local.net",
	"&'*+-./=?^_{}~@other-valid-characters-in-local.net",
	"mixed-1234-in-{+^}-local@sld.net",
	"country-code-tld@sld.rw",
	"local@sld.newTLD",
	"the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org",
	"the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-three-characters-so-it-is-valid-blah-blah.com",
	"local@sub.domains.com",
	"backticks`are`legit@test.com",
	"digit-only-domain@123.com",
	"digit-only-domain-with-subdomain@sub.123.com"
];

var validUnsupported =
[
	"\"quoted\"@sld.com",
	"\"\\e\\s\\c\\a\\p\\e\\d\"@sld.com",
	"\"quoted-at-sign@sld.org\"@sld.com",
	"\"escaped\\\"quote\"@sld.com",
	"\"back\\slash\"@sld.com",
	"punycode-numbers-in-tld@sld.xn--3e0b707e",
	"bracketed-IP-instead-of-domain@[127.0.0.1]"
];

var invalidSupported =
[
	"@missing-local.org",
	"! #$%`|@invalid-characters-in-local.org",
	"(),:;`|@more-invalid-characters-in-local.org",
	"<>@[]\\`|@even-more-invalid-characters-in-local.org",
	".local-starts-with-dot@sld.com",
	"the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-255-characters-exactly.so-it-should-be-invalid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bl.org",
	"the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-four-characters-so-it-is-invalid-blah-blah.com",
	"missing-at-sign.net",
	"unbracketed-IP@127.0.0.1",
	"invalid-ip@127.0.0.1.26",
	"another-invalid-ip@127.0.0.256",
	"IP-and-port@127.0.0.1:25",
	"trailing-dots@test.de.",
	"dot-on-dot-in-domainname@te..st.de",
	"dot-first-in-domain@.test.de",
	"mg@ns.i"
];

console.log("SUPPORTED BY MODULE:\n");

console.log("SHOULD BE VALID:");
validSupported.forEach(function(email) { console.log("%s : %s", validateEmail(email) ? "    VALID" : "  INVALID", email); });

console.log("\nSHOULD BE INVALID:");
invalidSupported.forEach(function(email) { console.log("%s : %s", validateEmail(email) ? "    VALID" : "  INVALID", email); });

console.log("\n\nNOT SUPPORTED BY MODULE:\n");

console.log("SHOULD BE VALID:");
validUnsupported.forEach(function(email) { console.log("%s : %s", validateEmail(email) ? "    VALID" : "  INVALID", email); });

process.exit(0);
