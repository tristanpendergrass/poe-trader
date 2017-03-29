class TradeComparerCtrl {
  constructor($scope) {
  }
}

angular.module('poe-trader')
.component('tradeComparer', {
  templateUrl: 'templates/tradeComparer.tpl.html',
  controller: TradeComparerCtrl,
  controllerAs: 'vm',
  bindings: {
    itemA: '<',
    itemB: '<'
  }
});

