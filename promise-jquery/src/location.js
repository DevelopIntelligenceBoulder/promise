//Namespace declaration
(function() {
    //DevelopIntelligence namespace
    window.DI = window.DI || {};
})();

/**
 * Geolocation Module that retrieves the user coordinates.
 *  Attached to the DevelopIntelligence namespace.
 **/
DI.location = (function($) {
 	'use strict';

	//Possible error codes thrown via the Geolocation API
	var ERROR_TYPE_CODES = [
		'Unknown error',
		'Permission denied by user',
		'Position is not available',
		'Request timed out'
	];

	/**
	 * Gets the location from the browser.
	 * @return a promise that is fulfilled when the Geolocation has been found
	 **/
	var getLocation = function getLocation() {

		//Creating a jQuery deferred object
		var deferred = $.Deferred();

		//Geolocation API
		navigator.geolocation.getCurrentPosition(
            /**
              * Successful geolocation interaction.
              * @param position an object containing coordinates of the location
              **/
            function resolveLocation(position) {

                //Coordinates object
                var coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                //Resolve the promise making the interaction successful
                deferred.resolve(coordinates);

            },
            /**
              * Failed Geolocation information.
              * @param error an object containing a code and additional message information property
              **/
            function resolveError(error) {

                //Error message to log
                var errorMessage = ERROR_TYPE_CODES[error.code];

                //Error codes 0 and 2 have extra message information wrapped into the error message
                if (error.code === 0 || error.code === 2) {
                    errorMessage += ' ' + error.message;
                }

                //Reject the promise making the interaction a failure
                deferred.reject('Geolocation error: ' + errorMessage);

        });

		//jQuery Promise object
		return deferred.promise();

	};

    //Location module API
 	return {
 		getLocation: getLocation
 	};

 })(jQuery);