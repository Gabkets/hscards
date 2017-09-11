var hscards = angular.module("hscards", []);

hscards.directive('afterRender', ['$timeout', function ($timeout) {
    var def = {
        restrict: 'A',
        terminal: true,
        transclude: false,
        link: function (scope, element, attrs) {
            $timeout(scope.$eval(attrs.afterRender), 0);  //Calling a scoped method
        }
    };
    return def;
}]);

hscards.controller("hscardsexps-ctrl", ['$scope', '$http' , function($scope, $http) {
  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://dropgdesign.com/drupal/hscards/expansions.json'
  }).then(function successCallback(success) {

      var expansions =  success.data.expansions;

      $scope.expansions = expansions;

      }, function errorCallback(response) {

    });

    $scope.tiltit = function() {
      debugger;
     $('[data-tilt]').tilt();
    };

}]);

hscards.controller("hscardscards-ctrl", ['$scope', '$http' , function($scope, $http) {
  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://dropgdesign.com/drupal/hscards/cartas/icecrown'
  }).then(function successCallback(success) {
      var cards =  success.data.cards;

      $scope.cards = cards;

      }, function errorCallback(response) {

  });
}]);
