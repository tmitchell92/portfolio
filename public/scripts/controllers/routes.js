'use strict';
var app = app || {};

page('/', app.homeController.init);
page('/projects', app.projectsController.init)
page('/about', app.aboutController.init);

page();
