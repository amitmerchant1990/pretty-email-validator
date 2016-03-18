# Pretty Email Validator
[![NPM](https://nodei.co/npm/pretty-email-validator.png)](https://nodei.co/npm/pretty-email-validator/)
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
