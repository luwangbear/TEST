app.controller('myCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.lastname = "Doe";
    $scope.showMe = false;
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }
    $scope.fullName = function() {
        return $scope.firstname + " " + $scope.lastname;
    }
    $scope.count = 0;
    $scope.myFunction = function() {
        $scope.count++;
        $scope.showMe = !$scope.showMe;
    }
});

app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php").then(function(response) {
        $scope.myData = response.data.records;
    });
});

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