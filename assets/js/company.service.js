(function(){
  'use strict';

  angular.module('app')
    .factory('Company', Company);

    function Company($http){
      let urlBase = '/api/company';
      let api = {}

      api.getAll = function(){
        return $http.get(urlBase)
      }
      api.get = function(id){
        return $http.get(urlBase + '/' + id)
      }
      api.insert = function(data){
        return $http.post(urlBase, data)
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