'use strict'
var projects=[];

function Project(name,link, content){
  this.name = name;
  this.link = link;
  this.content = content;
}

Project.prototype.toHtml = function() {
  var $newProject = $('projects.template').clone();

  $newProject.removeClass('template');
  // $newProject.addClass('draft');
  // $newProject.data('category', this.category);

  $newProject.find('h2').html(this.name);
  $newProject.find('a').attr('href', this.link);
  $newProject.find('.project-body').html(this.content);

  return $newProject;
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
