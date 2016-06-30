var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    template: "<h1>Main</h1><p>Click on the links to change this content</p>"
  })
  .when("/red", {
    template: "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
  })
  .when("/green", {
    template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
  })
  .when("/blue", {
    templateUrl : "myApp.html#/"
  });
});