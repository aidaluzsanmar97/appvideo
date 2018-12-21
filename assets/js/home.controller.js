(function(){
  'use strict'
  angular.module('app')
    .controller('homeController', ['$window', 'Objetives', HomeController])
  
  function HomeController($window, Objetives){
    $scope.objetives = []
    let ruc = $window.location.search.substr(4, 11)
    Objetives.get(ruc)
      .then(function(res){
        $scope.objetives = res.data.forEach( el => {
                    
        });
      }, function (err){

      })

  }
})()