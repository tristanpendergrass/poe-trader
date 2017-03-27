console.log('why hello there');

angular.module('poe-trader', [])

.run(($http) => {
  $http.get('/pair-info?item1=4&item2=8')
    .then((res) => {
      console.log('res is', res);
    }, (err) => {
      console.log('err is', err);
    });
});
