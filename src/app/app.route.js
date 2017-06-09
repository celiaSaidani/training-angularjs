/**
 * Created by ebiz on 09/06/17.
 */
(function() {
    'use strict';
    angular
        .module('app')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'src/app/404.html'
            });
    }
})();

