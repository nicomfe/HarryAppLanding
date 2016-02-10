'use strict';

(function() {

class MainController {

  constructor($http, Util, $scope, subscriberService) {
    this.$http = $http;
    this.awesomeThings = [];
    this.Util = Util;
    this.subscriberService = subscriberService;
    $scope.hideMessage = false;
    this.$scope = $scope;
    $scope.scrollTo = this.scrollTo.bind(this);
    $scope.openMenu = this.openMenu.bind(this);
    $scope.handleError = this.handleError.bind(this);
    $scope.addSubscriber = this.addSubscriber.bind(this);
  }

  addSubscriber(){
    if(this.$scope.subscriberForm && this.$scope.subscriberForm.$invalid){
      return;
    }
    const ctrl = this;
    this.subscriberService.add(this.$scope.subscriber).then(function(response){
      if(response && response.status === 201){
        ctrl.$scope.successMessage = 'Thanks, we\'ll bee in touch soon!';
        ctrl.$scope.subscriber = {};
        setTimeout(function() {
          ctrl.$scope.disableBtn = true;
          ctrl.$scope.hideMessage = true;
          ctrl.$scope.$apply();
        }, 5000);
      }else{
        ctrl.handleError(response.error);
      }
    }).catch((err) => {
      ctrl.handleError(err);
    });
  }

  handleError(err){
    this.$scope.errorMessage = 'Something went wrong :(, please try again later';
    setTimeout(function() {
      this.$scope.hideMessage = true;
      this.$scope.$apply();
    }, 5000);
    console.warn(err);
  }

  scrollTo(target) {
    this.Util.scrollTo(jQuery('#'+target));
    if(jQuery('#menu-icon').hasClass('active')){
      this.toggleMenu();
    }
  }

  openMenu(){
    this.toggleMenu();
  }

  toggleMenu(){
    $("nav").slideToggle();
    $("#menu-icon").toggleClass("active");
  }
}

angular.module('harryAppLandingApp')
  .controller('MainController', MainController);
})();
