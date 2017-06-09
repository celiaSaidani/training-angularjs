(function () {
    'use strict';
    angular.module('app.dashboard').factory('dashboardService', computerService);

    /* @ngInject */
    function computerService($http) {
        var urlBase = 'http://localhost:8080/api';
        return {
            getComputers: function () {
                return $http.get(urlBase + '/computers');
            }
        };
    }
})();
