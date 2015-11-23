//Namespace declaration
(function() {
    //DevelopIntelligence namespace
    window.DI = window.DI || {};
})();

/**
 * Geolocation Module that retrieves the user coordinates.
 *  Attached to the DevelopIntelligence namespace.
 *  NOTE: For simplicity any event listener setup to handle this module event will be
 *      notified when this module dispatches an event.
 *  @fires location
 **/
DI.location = (function() {
 	'use strict';

	//Possible error codes thrown via the Geolocation API
	var ERROR_TYPE_CODES = [
		'Unknown error',
		'Permission denied by user',
		'Position is not available',
		'Request timed out'
	];

    //Custom event type
    var EVENT_TYPE = 'location';

    //Event DOM element
    var DOM_ELEMENT = document.body;

    /**
     * Gets the event type of the module (i.e. 'location').
     * @returns {string} of custom event type
     */
    var getEventType = function getEventType() {
        return EVENT_TYPE;
    };

	/**
	 * Gets the location from the browser.
	 **/
	var getLocation = function getLocation() {

        //Geolocation API
        navigator.geolocation.getCurrentPosition(
            /**
             * Successful geolocation interaction.
             * @param position an object containing coordinates of the location
             * @event location event with success and coordinates is fired
             **/
            function resolveLocation(position) {

                //Message to be sent in event
                var message = {};

                //Setting success flag
                message.success = true;

                //Coordinates object
                message.coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                //Dispatch event for success location interaction
                var locationEvent = new CustomEvent(EVENT_TYPE, { 'detail': message });
                DOM_ELEMENT.dispatchEvent(locationEvent);

            },
            /**
             * Failed Geolocation information.
             * @param error an object containing a code and additional message information property
             * @event location event with failure and error message is fired
             **/
            function resolveError(error) {

                //Message to be sent in event
                var message = {};

                //Setting success flag
                message.success = false;

                //Error message to log
                message.errorMessage = ERROR_TYPE_CODES[error.code];

                //Error codes 0 and 2 have extra message information wrapped into the error message
                if (error.code === 0 || error.code === 2) {
                    message.errorMessage += ' ' + error.message;
                }

                //Dispatch event for failed location interaction
                var locationEvent = new CustomEvent(EVENT_TYPE, { 'detail': message });
                DOM_ELEMENT.dispatchEvent(locationEvent);

        });

	};

    //Location module API
 	return {
 		getLocation: getLocation,
        getEventType: getEventType
 	};

 })();