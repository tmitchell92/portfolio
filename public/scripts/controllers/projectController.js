'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  projectsController.init = function(){
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  module.projectsController = projectsController;
})(app);
