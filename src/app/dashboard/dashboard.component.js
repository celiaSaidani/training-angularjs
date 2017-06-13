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
    function DashboadController($log, computerService, $translate,$state) {
        // jshint validthis: true
        const vm = this;
        vm.data = [];
        vm.page = 1;
        vm.pageSize = 10;
        vm.size = 0;
        vm.$onInit = $onInit;
        vm.getComputers = getComputers;
        vm.changeSize = changeSize;
        vm.changeLang = changeLang;
        vm.isCurrent = isCurrent;
        vm.gotoAdd=gotoAdd;

        getComputers(vm.page);

        function getComputers(page) {
            computerService.getPage(page, vm.pageSize).then(function (response) {
                vm.data = response.data;
                vm.size = response.size;
            }, function (error) {
                $log.debug('Unable to load page : ' + error.message);
            });
        }

        function changeSize(pageSize) {
            vm.pageSize = pageSize;
            getComputers(1);
        }

        function changeLang(language) {
            $translate.use(language);

        }

        function isCurrent(language) {
            return language === $translate.use();

        }
        function gotoAdd() {
            $state.go('add');
        }


        function $onInit() {
            $(".editMode").hide();
            $log.debug('DashboadController init');
        }
    }
})();
