(function(){
  'use strict';
  
  angular.module('app')
  
    .controller('visionController', ['$scope', '$window', '$http', '$log', 'Vision', 'Company', function ($scope, $window, $http, $log, Vision, Company) {
      
      let ruc = $window.location.search.substr(4, 11);
      $scope.score = {}
      $scope.score.selected = {}
      $scope.score.values = []
      $scope.vision = {}

      Company.get(ruc)
        .then(function(res){
          $scope.vision.value = res.data[0].vision
          console.log( res.data )
        }, function(err){
          $scope.status = `error ${err.messagge}`
        })

      Vision.get(ruc)
        .then(function(res){
          $scope.score.values = res.data
        }, function(err){
          $scope.status = `error ${err}`
        })
      
      // gets the template to ng-include for a table row / item
      $scope.getTemplate = function (value) {
        if (value.id === $scope.score.selected.id) return 'edit';
        else return 'display';
      };
  
      $scope.editValue = function (value) {
        $scope.score.selected = angular.copy(value);
      };
  
      $scope.saveValue = function (idx) {
        
        $scope.score.values[idx] = angular.copy($scope.score.selected);
        let data = $scope.score.values[idx]
        Vision.update(data)
        $scope.reset();
      };
  
      $scope.getTotalPunctuation = function (){  
        let total = 0;
  
        $scope.score.values.forEach(function(el) {
          total += el.peso*el.clasificacion
        });
  
        return total
      }
  
      $scope.reset = function () {
        $scope.score.selected = {};
      };
    }])
})()