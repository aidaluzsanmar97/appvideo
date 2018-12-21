(function(){
  'use strict';
  
  angular.module('app')
  
    .controller('processController', ['$scope', '$window', '$http', '$log', 'Objetives', function ($scope, $window, $http, $log, Objetives) {
      
      let ruc = $window.location.search.substr(4, 11);
      $scope.objetives = {}
      $scope.objetives.selected = {}
      $scope.objetives.values = []

      Objetives.getByPerspectives({ruc: ruc, perspective: 'Procesos'})
        .then( function(res){
          console.log(res.data)
          $scope.objetives.values = res.data
        }, function(err){
          $scope.error = `error ${err.message}`
        })
      
      
      // gets the template to ng-include for a table row / item
      $scope.getTemplate = function (value) {
        if (value.id === $scope.objetives.selected.id) return 'edit';
        else return 'display';
      };
  
      $scope.editValue = function (value) {
        $scope.objetives.selected = angular.copy(value);
      };
  
      $scope.saveValue = function (idx) {        
        $scope.objetives.values[idx] = angular.copy($scope.objetives.selected);
        let data = $scope.objetives.values[idx]
        console.log(data)
        Objetives.update(data)
        $scope.reset();
      }
  
      $scope.reset = function () {
        $scope.objetives.selected = {};
      }

      $scope.newObjetive = function(objetive){
        objetive.perspective = 'Procesos'
        Objetives.insert(ruc, objetive)
          .then(function(res){
            $scope.objetives.values.push(res.data)
          }, function(err){
            $scope.status = `error ${err.message}`
          })
      }
    }])
})()