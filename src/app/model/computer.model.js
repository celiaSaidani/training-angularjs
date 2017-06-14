/**
 * Created by ebiz on 12/06/17.
 */
(function () {
    'use strict';
    angular.module('app.model').factory('computerModel', ComputerModel);

    /* @ngInject */
    function ComputerModel() {
        var computerMap = {};

        computerMap.MapDTO = function (computerDTO) {
            if (computerDTO.dateIn != null) {
                computerDTO.dateIn = new Date(computerDTO.dateIn).toISOString().substr(0,10);
            }
            if (computerDTO.dateOut != null) {
                computerDTO.dateOut = new Date(computerDTO.dateOut).toISOString().substr(0,10);
            }
            return computerDTO;

        };
        computerMap.Map= function (computerDTO) {

            if (computerDTO.dateIn != null) {
               var d=computerDTO.dateIn;

                computerDTO.dateIn= d.toISOString().substr(0,10);
                computerDTO.dateIn= new  Date( computerDTO.dateIn).toISOString().substr(0,10);
                debugger;
            }
            if (computerDTO.dateOut != null) {
               var d=  computerDTO.dateOut
                computerDTO.dateOut = (d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate()).toISOString().substr(0,10);;
            }
            return computerDTO;

        };
        return computerMap;
    }


})();