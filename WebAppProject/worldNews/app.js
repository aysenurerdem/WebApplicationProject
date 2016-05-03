/**
 * Created by aysenurerdem on 4/30/16.
 */

var app = angular.module('worldNews', ['ngAnimate', 'ui.bootstrap']);

app.controller('worldNewsController', function ($scope) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 720 + slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/' + newWidth + '/350',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
    
    
});