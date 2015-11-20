(function() {
    'use strict';

    angular.module('app')
        .controller('ApplicationController', ['location', ApplicationController]);

    /**
     * Application controller for the Angular application.
     * @constructor
     */
    function ApplicationController(location) {
        //Holding object instance
        var ac = this;

        //Coordinate object
        this.coordinates = {
            latitude: '',
            longitude: ''
        };

        //Getting location from the location service
        location.getLocation().then(function(data) {
            ac.coordinates = data;
        });

    }

})();