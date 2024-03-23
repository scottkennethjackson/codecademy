app.controller("MainController", ["$scope", "places", function($scope, places) {
    $scope.mapCenter = {
        lat: 53.4808,
        lng: -2.2426,
        zoom: 17
    };
    
    places.success(function(data) {
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    })
}]);