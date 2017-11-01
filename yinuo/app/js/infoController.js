
app.controller('infoController',['$scope','$state',function($scope,$state){
    $scope.timeTitle="版本流程";
    $scope.timeList=[{
        time:"今天",
        data:[
            {time:"19:00",content:"内容"},
            {time:"15:00",content:"内容2"}
        ]
    },{
        time:"昨天",
        data:[
            {time:"19:00",content:"内容23333"},
            {time:"15:00",content:"内容2444"}
        ]
    }]

}]);
