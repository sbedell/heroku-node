const crypto = require('crypto');
const querystring = require('querystring');
const url = require('url');
// ----------------------------------------------

console.time('100-elements');
    for (var i = 0; i < 100; i++) { }
console.timeEnd('100-elements');

var qrystr = querystring.parse('foo=bar&abc=xyz&abc=123');
console.log(qrystr);

var hmac = crypto.createHmac('sha256', 'a secret thing');
console.log(hmac.digest());