const request = require('request');

module.exports = function requestWebpage(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};
