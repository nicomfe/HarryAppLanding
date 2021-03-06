'use strict';

(function() {

/**
 * The Util service is for thin, globally reusable, utility functions
 */
function UtilService($window, $timeout) {
  var Util = {
    /**
     * Return a callback or noop function
     *
     * @param  {Function|*} cb - a 'potential' function
     * @return {Function}
     */
    safeCb(cb) {
      return (angular.isFunction(cb)) ? cb : angular.noop;
    },

    /**
     * Parse a given url with the use of an anchor element
     *
     * @param  {String} url - the url to parse
     * @return {Object}     - the parsed url, anchor element
     */
    urlParse(url) {
      var a = document.createElement('a');
      a.href = url;
      return a;
    },

    /**
     * Test whether or not a given url is same origin
     *
     * @param  {String}           url       - url to test
     * @param  {String|String[]}  [origins] - additional origins to test against
     * @return {Boolean}                    - true if url is same origin
     */
    isSameOrigin(url, origins) {
      url = Util.urlParse(url);
      origins = (origins && [].concat(origins)) || [];
      origins = origins.map(Util.urlParse);
      origins.push($window.location);
      origins = origins.filter(function(o) {
        return url.hostname === o.hostname &&
          url.port === o.port &&
          url.protocol === o.protocol;
      });
      return (origins.length >= 1);
    },

    scrollTo(target, topPadding, complete) {
        if(!topPadding){
          topPadding = 20;
        }
        $timeout(function() {
            var $target = $(target);

            var scrollTop = $target.length ? $target.offset().top - 10 - (topPadding || 0) : 0;

            $('html, body').animate({
                scrollTop: scrollTop
            }, 500, null, function() {
                if (complete)
                    complete($target);
            });
        });
    }
  };

  return Util;
}

angular.module('harryAppLandingApp.util')
  .factory('Util', UtilService);

})();
