(function () {
    'use strict';
    angular.module('app.service').factory('dashboardService', Service);

    /* @ngInject */
    function Service($http) {
        var dataFactory = {};
        let apiComputers= '/computers';
        let apiCompagnies='/companies'

        dataFactory.getComputers = function () {
            return $http.get(env.api.URL +apiComputers);
        };
        dataFactory.getPage = function (page,size) {

            return $http.get(env.api.URL + apiComputers+ '?page='+ page + '&size='+ size);
        };
        dataFactory.insert = function () {
            return $http.post(env.api.URL + apiComputers);
        };
        dataFactory.update = function () {
            return $http.put(env.api.URL + apiComputers);
        };
        dataFactory.delete = function () {
            return $http.delete(env.api.URL + apiComputers);
        };
        dataFactory.getCompanies = function () {
            return $http.delete(env.api.URL + apiCompagnies);
        };

        return dataFactory;

    }
})();
