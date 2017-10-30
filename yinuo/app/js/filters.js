'use strict';

/* Filters */

app.filter('itachi',['$scope','$state',function($scope,$state){
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);
