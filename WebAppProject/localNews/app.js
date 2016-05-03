/**
 * Created by aysenurerdem on 4/30/16.
 */

var app = angular.module('localNews', ['ngAnimate', 'ui.bootstrap','ngResource']);

app.controller('localNewsController', function ($scope,newsData,newsDataPopular) {
    $scope.news = [];

    newsData.get(function(news) {
        $scope.news = news.response.docs;
        console.log(news);

        for (var i = 0; i <  4; i++) {
            if($scope.news[i].multimedia.length){

                slides.push({
                    image: 'http://www.nytimes.com/' + $scope.news[i].multimedia[1].url,
                    text: $scope.news[i].headline.main,
                    id: currIndex++,
                    web_url: $scope.news[i].web_url
                });
            }


        }
    }); //query() returns all the entries

    newsDataPopular.get(function(news) {
        $scope.newsPopular = news.response.docs;
        
    }); //query() returns all the entries


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;



});

app.factory('newsData', function($resource) {
    return $resource('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name%3A%28%22U.S%22%29&sort=newest&api-key=1d39aab8e807502f1acb713d6e28128b%3A8%3A75170008'); // Note the full endpoint address
});

app.factory('newsDataPopular', function($resource) {
    return $resource('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name%3A%28%22U.S%22%29&sort=newest&page=2&api-key=1d39aab8e807502f1acb713d6e28128b%3A8%3A75170008'); // Note the full endpoint address
});

