(function () {
    'use strict';
    angular.module('app.service').factory('dashboardService', Service);

    /* @ngInject */
    function Service($http, computerModel) {
        let dataFactory = {};
        let apiComputers = '/computers';
        let apiCompagnies = '/companies';

        dataFactory.getComputers = function () {
            $http.get(env.api.URL + apiComputers).then(function (response) {
                let data = response.data.computers;
                for (let i = 0; i < data.length; i++) {
                    data[i] = computerModel.MapDTO(data[i]);
                }
                return response.data.computers = data;
            });
        };
        dataFactory.getPage = function (page, size) {
           $http.get(env.api.URL + apiComputers + '?page=' + page + '&size=' + size).then(function (response) {
               debugger;
               let data = response.data.computers;
               for (let i = 0; i < data.length; i++) {
                   data[i] = computerModel.MapDTO(data[i]);

               }
              response.data.computers = data;
               return  response
           });
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
