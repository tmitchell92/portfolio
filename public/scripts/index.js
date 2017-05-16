'use strict'

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.link = rawDataObj.link;
  this.body = rawDataObj.body;
  this.image = rawDataObj.image;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#project-template').html());
  return templateRender(this);
};

var handleMainNav = function() {
  $('#nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('tab')).fadeIn();
  });
  $('#nav-bar .tab:first').click();
}
handleMainNav();

Project.loadAll = function(rawData){
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    let rawData = (JSON.parse(localStorage.rawData))
    Project.loadAll(rawData)
    Project.all.forEach(function(ourNewProjectObject) {
      $('#projects').append(ourNewProjectObject.toHtml());
    })
  } else {
    $.getJSON('/data/projects.json').then(function(data) {
      localStorage.rawData = (JSON.stringify(data))
      data.forEach(function(projectObject) {
        Project.all.push(new Project(projectObject))
      })
      Project.all.forEach(function(ourNewProject) {
        $('#projects').append(ourNewProject.toHtml());
      })
    })
  }
}
