'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {

  }

}

angular.module('harryAppLandingApp')
  .controller('NavbarController', NavbarController);
