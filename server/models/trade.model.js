const getItemById = require('../functions/getItemById.js');

module.exports = class Trade {
  constructor(data) {
    this.ign = data.ign; // in game name of the trader
    this.buycurrency = getItemById(data.buycurrency);
    this.buyamount = data.buyamount;
    this.sellcurrency = getItemById(data.sellcurrency);
    this.sellamount = data.sellamount;
  }

  get ratio() {
    return 1.0 * sellamount / buyamount;
  }
}
