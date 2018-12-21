app

  .controller('visionController', ['$scope', function($scope){
    $scope.mision = {
      value: 'mi vision',
      selected: {}
    }
    
  }])

  .controller('tableController', ['$scope', function ($scope) {
    $scope.model = {
      values: [{
        id: 1,
        name: "Ben",
        age: 28
      }, {
        id: 2,
        name: "Sally",
        age: 24
      }, {
        id: 3,
        name: "John",
        age: 32
      }, {
        id: 4,
        name: "Jane",
        age: 40
      }],
      selected: {}
    }
    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (value) {
      if (value.id === $scope.model.selected.id) return 'edit';
      else return 'display';
    };

    $scope.editValue = function (value) {
      $scope.model.selected = angular.copy(value);
    };

    $scope.saveValue = function (idx) {
      console.log("Saving contact");
      $scope.model.values[idx] = angular.copy($scope.model.selected);
      $scope.reset();
    };

    $scope.reset = function () {
      $scope.model.selected = {};
    };
  }])

