angular.module('poe-trader')
.controller('MainCtrl', ($scope, $http) => {
  const itemA = $scope.itemA = {
    id: 4,
    name: 'Chaos'
  };
  const itemB = $scope.itemB = {
    id: 8,
    name: 'Jeweller'
  };

  $scope.foo = 'bar';

  Promise.all([
    $http.get(`/trades?want=${ itemA.id }&have=${ itemB.id }`),
    $http.get(`/trades?want=${ itemB.id }&have=${ itemA.id }`)
  ])
    .then((res) => {
      $scope.itemATrades = res[0];
      $scope.itemBTrades = res[1];
    });
});
