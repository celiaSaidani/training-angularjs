/**
 * Created by ebiz on 09/06/17.
 */
(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'cdbDashboard'
            }).state('add', {
            url: '/add',
            component: 'cdbEdit'
        }).state('edit', {
            url: '/edit/:ComputerId',
            component: 'cdbEdit'
    });
    }
})();
