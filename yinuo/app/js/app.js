/* created by zhoupeng 2017-10-25 */

'use strict';
var app=angular.module("myApp",['ui.router']);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/yinuo/home");
    $stateProvider.state({
        name:"yinuo",
        url:"/yinuo",
        abstract:true,
        templateUrl: 'html/layout/base.html',
        controller:'baseController'
    }).state({
        name:"detail",
        url:"/detail",
        template:"<h1>这是detail页面</h1>"
    }).state({
        name:"yinuo.home",
        url:"/home",
        templateUrl: 'html/home.html',
        controller:'homeController'
    }).state({
        name:"yinuo.productService",
        url:"/product-service",
        templateUrl: 'html/product.html'
    }).state({
        name:"yinuo.solution",
        url:"/solution",
        templateUrl: 'html/solution.html',
    }).state({
        name:"yinuo.info",
        url:"/info",
        templateUrl: 'html/info.html',
        controller:'infoController'
    }).state({
        name:"yinuo.ally",
        url:"/ally",
        templateUrl: 'html/ally.html',
    }).state({
        name:"yinuo.aboutUs",
        url:"/about-us",
        templateUrl: 'html/about-us.html',
    });
}]);
