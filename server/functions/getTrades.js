const config = require('../../config.json');
const requestWebpage = require('./requestWebpage.js');
const cheerio = require('cheerio');

const Trade = require('../models/trade.model.js');

module.exports = function getTrades(want, have) {
  const scrapingUrl = `http://currency.poe.trade/search?league=${ config.serverName }&online=true&want=${ want }&have=${ have }`;

  return requestWebpage(scrapingUrl)
    .then((rawHtml) => {
      const $ = cheerio.load(rawHtml);

      return Array.from($('.displayoffer')).slice(0, 1).map((el) => {
        return new Trade({
          ign: el.attribs['data-ign'],
          buycurrency: parseInt(el.attribs['data-buycurrency']),
          buyvalue: parseInt(el.attribs['data-buyvalue']),
          sellcurrency: parseInt(el.attribs['data-sellcurrency']),
          sellvalue: parseInt(el.attribs['data-sellvalue'])
        });
      });
    });
};
