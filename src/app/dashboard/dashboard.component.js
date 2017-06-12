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
        vm.data = [];
        vm.page = 1;
        vm.pageSize=10;
        vm.size=0;
        vm.$onInit = $onInit;
        vm.getComputers = getComputers;
        vm.changeSize = changeSize;

        getComputers(vm.page);

        function getComputers(page) {
            dashboardService.getPage(page,vm.pageSize).then(function (response) {
                vm.data = response.data;
                vm.size= response.size;
            }, function (error) {
                $log.debug('Unable to load page data: ' + error.message);
            });
        }
        function changeSize(pageSize) {
            vm.pageSize=pageSize;
            getComputers(1);
        }
        function $onInit() {
            $(".editMode").hide();
            $log.debug('DashboadController init');
        }
    }
})();
