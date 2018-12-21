(function(){
  'use strict';
  
  angular.module('app')
  
    .controller('tableController', ['$scope', '$window', '$http', '$log', 'Mision', 'Company', function ($scope, $window, $http, $log, Mision, Company) {
      
      let ruc = $window.location.search.substr(4, 11);
      $scope.score = {}
      $scope.score.selected = {}
      $scope.score.values = []
      $scope.mision = {}

      Company.get(ruc)
        .then(function(res){
          $scope.mision.value = res.data[0].mision
          console.log( res.data )
        }, function(err){
          $scope.status = `error ${err.messagge}`
        })

      Mision.getAll(ruc, function(res){
        $scope.score.values = res.data
      }, function(err){
        $log.info(`error ${err}`)
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
        let idMision = $scope.score.values[idx].id
        let weight = $scope.score.values[idx].peso      
        let clasification = $scope.score.values[idx].clasificacion
        Mision.update(idMision, {weight, clasification})
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