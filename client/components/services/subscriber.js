'use strict';

angular.module('harryAppLandingApp').service('subscriberService',function($http, configValues){
  return{
    add: function(subscriber){
      if(subscriber){
        var url = configValues.subscriberApi;
        return $http({
          method: 'POST',
          url: url,
          'Content-Type': 'application/json',
          data: subscriber
        });
      }
    }
  };
});