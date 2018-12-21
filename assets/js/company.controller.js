( function (){
  'use strict';

  angular.module('app')
    .controller('companyController', companyController)

    function companyController($scope, $http, Company){
      $scope.companies = []
      $scope.company = {}

      Company.getAll()
        .then( function(res){
          $scope.companies = res.data
        }, function(err){
          $scope.status = `error ${err.message}`
        })

      $scope.newCompany = newCompany

      function newCompany(company){
        $http.post('http://localhost:3000/api/company', company)
          .then(function success(res){
            console.log(res.data)
            $scope.companies.push(res.data)
          }, function(err){
            $scope.status = `error ${err.message}`
          } )
      }

    }

} )();