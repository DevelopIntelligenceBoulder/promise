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

	//Main
	(function() {

        //Getting the location from the location module
        DI.location.getLocation(injectCoordinates);

	})();

})();