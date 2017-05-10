'use strict'
var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.link = rawDataObj.link;
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');
	// $newProject.addClass('draft');
	// $newProject.data('category', this.category);

  $newProject.find('a').html(this.title);
  $newProject.find('a').attr('href', this.link);
  $newProject.find('.project-body').html(this.body);

  return $newProject;
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
