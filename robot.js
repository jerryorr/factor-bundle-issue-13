var $ = require('jquery')

// If you don't require jQuery in this module, everything works
module.exports = function (s) { return s.toUpperCase() + ' ' + $('title').html() + '!' };
// module.exports = function (s) { return s.toUpperCase() + '!' };