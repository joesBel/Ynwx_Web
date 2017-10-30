'use strict';

/* created by zhoupeng 2017-10-27 */

app.controller('baseController',['$scope','$state',function($scope,$state){
    $scope.goState = function(route){
        $state.go(route);
    }
}]);
