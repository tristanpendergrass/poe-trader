class MainCtrl {
  constructor($scope, $http, $timeout, $interval) {
    this.$scope = $scope;
    this.$http = $http;
    this.$timeout = $timeout;

    const itemA = this.itemA = {
      id: 4,
      name: 'Chaos'
    };
    const itemB = this.itemB = {
      id: 8,
      name: 'Jeweller'
    };

    this.ajaxCall = this.getTrades().then(() => this.ajaxCall = undefined);

    $interval(() => {
      if (this.ajaxCall === undefined) {
        this.ajaxCall = this.getTrades().then(() => this.ajaxCall = undefined);
      }
    }, 5000);
  }

  getTrades() {
    if (this.ajaxUpdate !== undefined) return;

    return Promise.all([
      this.$http.get(`/trades?want=${ this.itemA.id }&have=${ this.itemB.id }`),
      this.$http.get(`/trades?want=${ this.itemB.id }&have=${ this.itemA.id }`)
    ])
      .then((res) => {
        this.itemATrades = res[0].data;
        this.selectedItemA = this.itemATrades[0];

        this.itemBTrades = res[1].data;
        this.selectedItemB = this.itemBTrades[0];

        this.lastUpdatedAt = new Date();
        this.$timeout();
      });
  }
}

angular.module('poe-trader').controller('MainCtrl', MainCtrl);
