class MainCtrl {
  constructor($scope, $http, $timeout) {
    const itemA = this.itemA = {
      id: 4,
      name: 'Chaos'
    };
    const itemB = this.itemB = {
      id: 8,
      name: 'Jeweller'
    };

    Promise.all([
      $http.get(`/trades?want=${ itemA.id }&have=${ itemB.id }`),
      $http.get(`/trades?want=${ itemB.id }&have=${ itemA.id }`)
    ])
      .then((res) => {
        this.itemATrades = res[0].data;
        this.selectedItemA = this.itemATrades[0];

        this.itemBTrades = res[1].data;
        this.selectedItemB = this.itemBTrades[0];

        console.log('this.itemATrades is', this.itemATrades);

        $timeout();
      });
  }
}

angular.module('poe-trader').controller('MainCtrl', MainCtrl);
