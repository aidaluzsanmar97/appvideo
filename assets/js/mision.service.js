(function(){
  'use strict'

  angular.module('app')
    .factory('Mision', MisionService)

    MisionService.$inject = ['$http']
    function MisionService($http){
      return {
        getAll: function(id, success, fail){
          $http.get(`/api/mision/${id}`)
            .then(success, fail)
        },
        update: function(id, data){
          $http.put(`/api/mision/${id}`, data)
            //.then(success, fail)
        },
        delete: function(success, fail){
          $http.put('/api/mision/:id')
          .then(success, fail)
        }
      }
    }
})()