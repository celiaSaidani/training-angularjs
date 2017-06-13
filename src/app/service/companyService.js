/**
 * Created by ebiz on 13/06/17.
 */
(function () {
    'use strict';
    angular.module('app.service').factory('companyService', Service);

    /* @ngInject */
    function Service($http) {
        let dataFactory = {};
        let apiCompagnies = '/companies';

        dataFactory.getCompanies = function () {
            return $http.get(env.api.URL + apiCompagnies);

        };

        return dataFactory;

    }
})();
