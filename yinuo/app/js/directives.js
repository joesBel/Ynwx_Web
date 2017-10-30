'use strict';

app.directive('testDirective',['$scope','$state',function($scope,$state){
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);