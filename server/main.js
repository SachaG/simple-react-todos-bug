import '../imports/api/tasks.js';

FastRender.onAllRoutes(function(path) {
  this.subscribe('tasks');
});