(function(){
  'use strict';

  angular.module('app')
    .factory('Objetives', Objetives);

    function Objetives($http){
      let urlBase = '/api/objetive';
      let api = {}

      api.getByPerspectives = function(query){
        return $http.get(urlBase + '/' + query.ruc + '/' + query.perspective)
      }
      api.get = function(id){
        return $http.get(urlBase + '/' + id)
      }
      api.insert = function(id, data){
        return $http.post(urlBase + '/' + id, data)
      }
      api.update = function(data){
        return $http.put(urlBase + '/' + data.id, data)
      }
      api.delete = function(id){
        return $http.delete(urlBase + '/' + id)
      }

      return api;
    }
})()