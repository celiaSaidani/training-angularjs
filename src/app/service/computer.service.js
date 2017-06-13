(function () {
    'use strict';
    angular.module('app.service').factory('computerService', Service);

    /* @ngInject */
    function Service($http, computerModel) {
        let dataFactory = {};
        let apiComputers = '/computers';
        let apiCompagnies = '/companies';

        dataFactory.getComputers = function () {
            return $http.get(env.api.URL + apiComputers).then(function (response) {
                let data = response.data.computersDTO;
                for (let i = 0; i < data.length; i++) {
                    data[i] = computerModel.MapDTO(data[i]);
                }
                return response.data.computersDTO = data;
            });
        };
        dataFactory.getPage = function (page, size) {
           return $http.get(env.api.URL + apiComputers + '?page=' + page + '&size=' + size).then(function (response) {
               let data = response.data.computersDTO;

               for (let i = 0; i < data.length; i++) {
                   data[i] = computerModel.MapDTO(data[i]);
               }
              response.data.computersDTO = data;
               return  response ;
           });
        };
        dataFactory.insert = function (computerDTO) {
            return $http.post(env.api.URL + apiComputers,computerDTO);
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
