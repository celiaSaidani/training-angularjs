/**
 * Created by ebiz on 09/06/17.
 */
(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboadController
        });

    /* @ngInject */
    function DashboadController($log,dashboardService) {
        // jshint validthis: true
        const vm = this;
        vm.computers = [];
        vm.$onInit = $onInit;

        getComputers();

        function getComputers() {
            dashboardService.getComputers().then(function (response) {
                vm.computers = response.data;
            }, function (error) {
                $log.debug('Unable to load page data: ' + error.message);
            });
        }
        function $onInit() {
            $log.debug('DashboadController init');

        }
    }
})();
