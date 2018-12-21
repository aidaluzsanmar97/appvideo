(function(){
  'use strict'

  angular.module('app')
    .factory('Table', Table)

    function Table(){
      // gets the template to ng-include for a table row / item
      let table = {}

      table.getTemplate = function (value) {
        if (value.id === $scope.score.selected.id) return 'edit';
        else return 'display';
      }
  
      table.editValue = function (value) {
        $scope.score.selected = angular.copy(value);
      }

      table.saveValue = function (idx) {
        
        $scope.score.values[idx] = angular.copy($scope.score.selected);
        let idCompany = $scope.score.values[idx].id
        let weight = $scope.score.values[idx].peso      
        let clasification = $scope.score.values[idx].clasificacion
        $http({
          method: 'PUT',
          url: '/api/mision'+'/'+idCompany,
          data: {weight, clasification}
        }).then( (res) => {
        }, (err) => {
          $log.log( `error ${err}` )
        } )
        $scope.reset();
      }

      table.getTotalPunctuation = function (){
  
        let total = 0;
  
        $scope.score.values.forEach(function(el) {
          total += el.peso*el.clasificacion
        });
  
        return total
      }
      return table
    }
})()