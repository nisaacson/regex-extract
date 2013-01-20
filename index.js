var rk = require('required-keys');
/**
 * Extracts the text out of the first capturing group
 * @param {String} text, the input string to search
 * @param {RegExp} pattern the pattern to apply. This pattern should have a
 * single capturing group set
 * @param {Function} callback will be called as
 *   callback(<error if occurred>, <match or null>)
 */
module.exports = function(text, pattern, cb) {
  var data = {
    text: text, pattern: pattern
  }
  rk.notNull(data, ['text', 'pattern'], function (err, reply) {
    if (err) {
      return cb(err);
    }
    var matches = text.match(pattern);
    if (!matches) {
      return cb(null, null);
    }
    if (matches.length !== 2) {
      err = 'unexpected number of matches in helper regex_extract'
      return cb(err, matches);
    }
    return cb(null, matches[1]);
  });
}
