/********************************************************************************************
 * Google API
 * Author: Andy Nguyen
 * Version: 1.0 - Release 22/8/2016
 ******************************************************************************************/

var YOUTUBE = (function($) {
    var newAPI = function(apiKey) {
        if (apiKey === null || apiKey === undefined) {
            console.error(ERROR.APINOTFOUND);
            return;
        }
        this.apiKey = apiKey;
        this.model = new MODEL.youtube(this.apiKey);
        this.data = new DATA.youtube(this.model);
    };
    return {
        newAPI: newAPI
    };
})(jQuery);

var MODEL = (function() {
    var youtube = function(apiKey) {
        this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey;
    };
    return {
        youtube: youtube
    };
})();

var DATA = (function() {
    /* YOUTUBE  */
    var youtube = function(youtubeModel) {

    };
    return {
        youtube: youtube
    };
    /* END YOUTUBE */
})();

var ERROR = (function() {
    return {
        APINOTFOUND: 'API not found!'
    };
})();
