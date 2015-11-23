/**
 * Main JavaScript to handle Geolocation module interaction.
 **/
(function() {
	'use strict';

    //DevelopIntelligence namespace
	window.DI = window.DI || {};

    /**
     * Inject the coordinates retrieved via our Geolocation interaction.
     **/
    var injectCoordinates = function injectCoordinates(coordinates) {
        document.getElementById('latitude').innerHTML = coordinates.latitude;
        document.getElementById('longitude').innerHTML = coordinates.longitude;
    };

    /**
     * Initialize geolocation module interaction.
     */
    var locationInitialize = function locationSetup() {
        //Module event type to register to
        var eventType =  DI.location.getEventType();

        //Getting the location from the location module
        document.body.addEventListener(eventType, function(event) {
            //Successful location request
            if (event.detail && event.detail.success) {
                injectCoordinates(event.detail.coordinates);
            //Failed location request
            } else {
                console.log(event.detail.errorMessage);
            }
        });
    };

	//Main
	(function() {

        //Initialize geolocation
        locationInitialize();

	})();

})();