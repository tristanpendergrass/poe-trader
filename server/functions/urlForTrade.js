const config = require('../../config.json');

module.exports = function urlForTrade(want, have) {
  if (want === undefined || have === undefined) {
    throw 'Must pass which item id is "want" and "have"';
  }

  return `http://currency.poe.trade/search?league=${ config.serverName }&online=true&want=${ want }&have=${ have }`;
};
