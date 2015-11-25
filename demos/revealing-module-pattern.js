//Safe encapsulation of all JS
(function() {
    //ES5 addition forcing JS execution to be efficient
    'use strict';

    //DevelopIntelligence Namespace to hold module
    var DI = window.DI || {};

    //Geolocation module
    DI.location = (function() {
        //Private method for getting location
        var getLocation = function getLocation() {
            //Grab the location from the browser
        };

        //Module API
        return {
            //Key-value ... left public / right private
            getLocation: getLocation
        };
    })();

})();