var app = angular.module("hscardscontent", []);

app.controller("hscardscontent-ctrl", function($scope, $http) {
  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://dropgdesign.com/drupal/hscards/content.json'
  }).then(function successCallback(success) {
      $scope.nodes = success.data;
    }, function errorCallback(response) {

    });
});
