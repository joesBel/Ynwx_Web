

app.directive('testDirective',[function($scope,$state){
    return {
        restrict : 'A',
        scope : {},
        link : function($scope, element, attrs) {
            $('.block').smoove();
        }
    };
}]);
app.directive("timeline", function() {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            title: "="
        },
        template: "<div class='m_timeline'><div class='time_tick' ng-if='title'><h5 class='clock'>{{title}}</h5></div><div class='time_bd' ng-transclude></div></div>",
        link: function() {

        }
    }
});
app.directive("timegroup", function() {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            tick: "="
        },
        template: "<div class='time_group'><div class='time_tick'><h5 class='circle'>{{tick}}</h5></div><div ng-transclude></div></div>",
        link: function() {

        }
    }
});
app.directive("timeitem", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            tick: "="
        },
        transclude: true,
        template: "<div class='time_item'><div class='time_tick'><span class='circle2'>{{tick}}</span></div><div class='time_item_cnt' ng-transclude></div></div>",
        link: function() {

        }
    }
})