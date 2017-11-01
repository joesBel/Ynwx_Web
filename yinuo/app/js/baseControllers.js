'use strict';

/* created by zhoupeng 2017-10-27 */

app.controller('baseController',['$scope','$state','$timeout', function($scope,$state,$timeout){
    /*  $timeout(function(){
          $('.shutter').shutter({
              shutterW: 1000, // 容器宽度
              shutterH: 358, // 容器高度
              isAutoPlay: true, // 是否自动播放
              playInterval: 3000, // 自动播放时间
              curDisplay: 3, // 当前显示页
              fullPage: false // 是否全屏展示
          });
      },1000);*/

    $(function () {
        $('.shutter').shutter({
            shutterW: 1000, // 容器宽度
            shutterH: 358, // 容器高度
            isAutoPlay: true, // 是否自动播放
            playInterval: 3000, // 自动播放时间
            curDisplay: 3, // 当前显示页
            fullPage: false // 是否全屏展示
        });
    });


}]);