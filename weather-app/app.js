var app = angular.module('weatherApp', []);
app.controller('weatherController', function ($scope, $http) {

    $scope.getWeather = function (city) {
        $scope.loading = true;
        $http.get('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&rapidapi-key=6029fd84b9msh135145744755842p16ebb4jsn6b56df77627d')
            .then(function (response) {
                $scope.weather = response.data;
                $scope.loading = false;
            }


            );




    };




});
