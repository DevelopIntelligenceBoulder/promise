//Geolocation API to fetch device position
//      resolveLocation callback function when location is found
//      rejectLocation callback function when location is not accessible
window.navigator.geolocation.getCurrentPosition(resloveLocation, rejectLocation);

/**
 * Successful geolocation interaction.
 * @param position an object containing coordinates of the location
 **/
function resloveLocation(position) {

    //Coordinates object
    var coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    //Resolve the promise making the interaction successful
    console.log(coordinates);
}

/**
 * Failed Geolocation information.
 * @param error an object containing a code and additional message
 *       information property
 **/
function rejectLocation(error) {

    //Possible error codes thrown via the Geolocation API
    var ERROR_TYPE_CODES = [
        'Unknown error',
        'Permission denied by user',
        'Position is not available',
        'Request timed out'
    ];

    //Error message to log
    var errorMessage = ERROR_TYPE_CODES[error.code];

    //Error codes 0 and 2 have extra message information wrapped
    //  into the error message
    if (error.code === 0 || error.code === 2) {
        errorMessage += ' ' + error.message;
    }

    //Reject the promise making the interaction a failure
    console.log('Geolocation error: ' + errorMessage);
}