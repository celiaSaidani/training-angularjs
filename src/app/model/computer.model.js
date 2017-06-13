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
                computerDTO.dateIn = new Date(computerDTO.dateIn).toLocaleDateString();
            }
            if (computerDTO.dateOut != null) {
                computerDTO.dateOut = new Date(computerDTO.dateOut).toLocaleDateString();
            }
            return computerDTO;

        };
        return computerMap;
    }


})();