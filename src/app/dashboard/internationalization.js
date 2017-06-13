/**
 * Created by ebiz on 13/06/17.
 */
(function () {
    'use strict';
    angular.module('app.dashboard').config(translationConfig);

        /* @ngInject */
        function translationConfig ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'src/resources/i18n/',// path to translations files
                suffix: '.json'// suffix, currently- extension of the translations
            });

            $translateProvider.preferredLanguage('fr');// is applied on first load

        };
})();



