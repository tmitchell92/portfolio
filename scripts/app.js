'use strict'
var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.link = rawDataObj.link;
  this.body = rawDataObj.body;
  this.image = rawDataObj.image;
}

Project.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#project-template').html());
  return templateRender(this);
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

var handleMainNav = function() {
  $('#nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('tab')).fadeIn();
  });
  $('#nav-bar .tab:first').click();
}
handleMainNav();
