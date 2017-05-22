'use strict'

var app = app || {};

(function(module) {

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

  Project.handleMainNav = function() {
    $('#nav-bar').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('tab')).fadeIn();
    });
    $('#nav-bar .tab:first').click();
  }

  Project.loadAll = rows => {
    Project.all = rows.map(ele => new Project(ele));
  };

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      let rawData = (JSON.parse(localStorage.rawData))
      Project.loadAll(rawData)
      Project.all.map(function(ourNewProjectObject) {
        $('#projects').append(ourNewProjectObject.toHtml());
      })
    } else {
      $.getJSON('/data/projects.json').then(function(data) {
        localStorage.rawData = (JSON.stringify(data))
        data.map(function(projectObject) {
          Project.all.push(new Project(projectObject))
        })
        Project.all.map(function(ourNewProject) {
          $('#projects').append(ourNewProject.toHtml());
        })
      })
    }
  }

  Project.numWordsAll = () => {
    return Project.all.map(function(data){
      return data.body.split(' ').length;
    })
  .reduce(function(acc, current) {
    return acc + current;
  },[])
  }

  Project.handleMainNav();
  Project.numWordsAll();
  module.Project = Project
})(app);
