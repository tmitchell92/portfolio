'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  homeController.init = function(){
    $('.tab-content').hide();
    $('#home').fadeIn();
  }

  module.homeController = homeController;
})(app);
