'use strict';

(function() {

class HowItWorksController {

  constructor() {
    var s = skrollr.init({
      render: function(data) {
        //Log the current scroll position.
        $('#info').text(data.curTop);
      }
    });
  }
}

angular.module('harryAppLandingApp')
  .controller('HowItWorksController', HowItWorksController);
})();
