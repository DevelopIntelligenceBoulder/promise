(function() {
    'use strict';

    window.DI = window.DI || {};

    DI.location = (function() {

        var getLocation = function getLocation() {
            //Geolocation API
            window.navigator.geolocation.getCurrentPosition(
                function resolveLocation(position) {
                    //More details...
                    console.log(position);
                },
                function rejectLocation(error) {
                    //More details...
                    console.log(error);
                });
        };

        return {
            getLocation: getLocation
        };

    })();
})();