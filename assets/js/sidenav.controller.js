(function(){
  'use strict';

  angular.module('app')
    .controller('sidenavController', sidenavController)
    
    sidenavController.$inject = ['$scope', 'Company', '$window']

    function sidenavController($scope, Company, $window){
      $scope.id = ''
      $scope.status = ''
      let ruc = $window.location.search.substr(4, 11);

      Company.get(ruc)
        .then( function(res){
          $scope.id = res.data[0].ruc
        }, function(err){
          $scope.status = `error ${err.messagge}`
        })

      $scope.financial = ['Perspectiva1', 'Perspectiva2'];
      $scope.growth = ['Perspectiva1', 'Perspectiva2'];
      $scope.values = [''];
    }
})();