'use strict';

(function() {

class MainController {

  constructor($http, Util, $scope) {
    this.$http = $http;
    this.awesomeThings = [];
    this.Util = Util;
    $scope.scrollTo = this.scrollTo.bind(this);
    $scope.openMenu = this.openMenu.bind(this);
    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
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
  //STICKY MENU
  // var navPosition;
  // jQuery(window).scroll(function(){
  //   if(!navPosition){
  //     navPosition=jQuery('nav').offset().top;
  //   }
  //   var navTop=jQuery(window).scrollTop();
  //   if(navPosition + 20 < navTop){
  //     jQuery('nav').addClass('fixed');
  //   }
  //   else{
  //     jQuery('nav').removeClass('fixed');
  //   }
  // });

  // //TRANSITION MENU
  // jQuery('ul a,#gotoTop').click(function(){
  //     var lienHref=jQuery(this).attr('href');
  //     var positionHrefTop=jQuery(lienHref).offset().top;
  //     jQuery('html,body').animate({scrollTop:positionHrefTop-50},1000);
  //     return false;
  // });
})();
