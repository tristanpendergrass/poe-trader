class TradeComparerCtrl {
  constructor($scope) {
    $scope.$watch(() => [this.tradeA, this.tradeB], (items) => {
      const [tradeA, tradeB] = items;

      if (tradeA === undefined || tradeB === undefined) return;

      if (tradeA.buycurrency.id !== tradeB.sellcurrency.id) {
        console.log('Something went wrong...these two items\' buy and sell currencies don\'t match up', this.tradeA, this.tradeB);
      }

      const costToBuyInMarketA = tradeA.sellvalue / tradeA.buyvalue;
      const priceFromSellingInMarketB = tradeB.buyvalue / tradeB.sellvalue;

      this.differential = priceFromSellingInMarketB - costToBuyInMarketA;
    }, true);
  }
}

angular.module('poe-trader')
.component('tradeComparer', {
  templateUrl: 'templates/tradeComparer.tpl.html',
  controller: TradeComparerCtrl,
  controllerAs: 'vm',
  bindings: {
    tradeA: '<',
    tradeB: '<'
  }
});

