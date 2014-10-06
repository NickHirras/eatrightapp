angular.module('eatRightApp').
config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/search'
      }).
      when('/404', {
        templateUrl: 'app/errors/404.html'
      }).
      when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'        
      }). 
      when('/nearby', {
        templateUrl: 'app/nearby/nearby.html',
        controller: 'NearbyCtrl'        
      }). 
      when('/favorites', {
        templateUrl: 'app/favorites/favorites.html',
        controller: 'FavoritesCtrl'        
      }). 
      otherwise({
        redirectTo: '/404'
      });
  }
]);
