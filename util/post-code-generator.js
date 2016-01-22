var RandExp = require('randexp');

var postCodeRegex = /(\b[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?\s)([0-9][A-Za-z]{1,2})?\b/;

var getPostCode = function() {
    return new RandExp(postCodeRegex).gen().trim().toUpperCase();
};

module.exports = {
    getPostCode: getPostCode 
};