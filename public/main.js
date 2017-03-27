console.log('why hello there');

angular.module('poe-trader', [])

.run(($http) => {
  $http.get('/trades?want=4&have=8')
    .then((res) => {
      console.log('res is', res);
    }, (err) => {
      console.log('err is', err);
    });
});
