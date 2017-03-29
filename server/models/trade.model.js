const getItemById = require('../functions/getItemById.js');

module.exports = class Trade {
  constructor(data) {
    this.ign = data.ign; // in game name of the trader
    this.buycurrency = getItemById(data.buycurrency);
    this.buyvalue = data.buyvalue;
    this.sellcurrency = getItemById(data.sellcurrency);
    this.sellvalue = data.sellvalue;
  }

  get ratio() {
    return 1.0 * sellamount / buyamount;
  }
}
