// AngularJs Version

var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "pages/app.html" })
        .when("/login", { templateUrl: "pages/login.html" });
});


app.controller("myCtrl", function ($scope) {
    $scope.checkAuth = function () {
        var tokenJson = localStorage["token"] | sessionStorage["token"];

        if (!tokenJson) {
            //display login/register view
            console.log("no");
            return;
        }

        //check if token is valid

        //display app view

    };

    $scope.checkAuth();
});

//JQuery Document Ready
$(function () {
    $('body').on('click', '#pills-tab a', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $(".navbar-login a").click(function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        // https://getbootstrap.com/docs/4.0/components/navs/#via-javascript
        $('#pills-tab a[href="' + href + '"]').tab('show'); // Select tab by name
    });

});