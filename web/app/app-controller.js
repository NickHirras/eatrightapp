angular.module('eatRightApp').
controller('AppCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.navbar = {
      tabs: [
        {title: 'SEARCH', icon: 'lib/icons/ic_search_wht_36dp.png', path: '/search'}, 
        {title: 'NEARBY', icon: 'lib/icons/ic_gps_fixed_wht_36dp.png', path: '/nearby'}, 
        {title: 'FAVORITES', icon: 'lib/icons/ic_favorite_wht_36dp.png', path: '/favorites'}
      ],
      selectedIndex: function() {
        for(i=0; i<$scope.navbar.tabs.length; i++) {
          if($location.path().indexOf($scope.navbar.tabs[i].path) === 0) {
            return i;
          }
        }
      }
    };

    $scope.goto = function(path) {
      $location.path(path);
    };

  }
]);