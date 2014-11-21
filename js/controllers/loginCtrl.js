app.controller('productCtrl', function($scope,simpleObj) {
  

});

app.controller('customersCtrl', function($scope,$http,$timeout) {
   

});

app.controller('loginCtrl', function($scope,$http) {

    $scope.parts = [
        {"type":"electronic"},
        {"type":"garbage"},
        {"type":"misc"},
    ];

    $scope.addRandom = function() {
        var newItem = {"type":"unknown"}

        $scope.parts.push(newItem);
        console.log('item added');
    }
   
});

app.controller('Ctrl', function($scope,$filter,$http) {
   

});

app.controller('appCtrl', function($scope,$http) {
    console.log('main app');

    
});


app.controller('mailCtrl', function($scope,$http) {
    /*
    $scope.items = [
        {"name":"Mohney","age":15},
        {"name":"belly","age":30},
        {"name":"George","age":35}
    ];
    */
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data) {
        console.log(data);
        $scope.items = data;
    });

    $scope.setInfo = function(item) {

        $scope.item = item;

    }

});