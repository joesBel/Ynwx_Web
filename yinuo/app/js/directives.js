'use strict';

app.directive('testDirective',['$scope','$state',function($scope,$state){
    return {
        restrict : 'A',
        scope : {},
        link : function($scope, element, attrs) {
            $('.block').smoove();
        }
    };
}]);