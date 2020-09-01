var app = angular.module('APIModule', []);



app.controller('APIController', function ($scope, $http, $window) {
 
    $scope.login = function () {


        var sub = {
            UserName: $scope.UserName,
            Password: $scope.Password
        }
        
        if($scope.UserName == "admin" && $scope.Password == "password")
        {
            window.location.href = 'map.html';
        }
        else{
            console.log("Oops! Something went wrong while fetching the data.");
        };
        

    };

       
   
    
});











