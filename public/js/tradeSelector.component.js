class TradeSelectorCtrl {
  constructor($scope) {
  }
}

angular.module('poe-trader')
.component('tradeSelector', {
  templateUrl: 'templates/tradeSelector.tpl.html',
  controller: TradeSelectorCtrl,
  controllerAs: 'vm',
  bindings: {
    trades: '<',
    selected: '<',
    onSelect: '&',
    itemInfo: '<',
    ratioNumerator: '@'
  }
});
