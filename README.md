[![pretty-email-validator](https://raw.githubusercontent.com/amitmerchant1990/pretty-email-validator/master/res/email-validator.png)](#)
# Pretty Email Validator [![npm version](https://badge.fury.io/js/pretty-email-validator.svg)](https://badge.fury.io/js/pretty-email-validator)
[![NPM](https://nodei.co/npm/pretty-email-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pretty-email-validator/)
> Pretty validation for emails

This is a small node module which checks for the validity of emails.

## Install

```
$ npm install --save pretty-email-validator
```

## Usage

```
var validateEmail = require('pretty-email-validator');

isEmail = validateEmail('test@test.com');
//=> true

isEmail = validateEmail('test@.com');
//=> false
```

## License

MIT
