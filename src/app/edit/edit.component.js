/**
 * Created by ebiz on 13/06/17.
 */
(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbEdit', {
            templateUrl: 'src/app/edit/computer.html',
            controller: EditController
        });
    /* @ngInject */
    function EditController($log,$stateParams,$state,companyService,computerService) {
        const vm = this;
        vm.operation='add';
        vm.data=[];
        vm.id=$stateParams[0];
        vm.computer={};
        vm.$onInit = $onInit;
        vm.update=update;
        vm.cancel=cancel;

        getCompanies();
        function getCompanies() {
            companyService.getCompanies().then(function (response) {
                vm.data = response.data;
            }, function (error) {
                $log.debug('Unable to load page : ' + error.message);
            });
        }

        function update(computer) {
            if(id != null){
                computerService.insert(computer);
            }
            else{
                $log.debug('Edit Computer');
            }
            
        }
        function cancel() {
            $state.go('dashboard');
        }
        function $onInit() {
            $(".editMode").hide();
            $log.debug('Edit init');
        }
    }
})();