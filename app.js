(function(){
  "use strict";

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController ($scope) {

  $scope.placeholder = "list comma separated dishes you usually have for lunch";
  $scope.nameBtn = "Check If Too Much";
  $scope.dishes = "";
  $scope.message = "";
  $scope.messageGreen=false;
  $scope.messageRed=false;

  $scope.checkLunch = function (){
      var totalDishes = countDishes($scope.dishes);
      if(totalDishes == 0){
        $scope.message = "Please enter data first";
        $scope.messageRed=true;
        $scope.messageGreen=false;
      }
      else if (totalDishes <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageGreen=true;
          $scope.messageRed=false;
      }
      else {
        $scope.message = "Too much!";
        $scope.messageGreen=true;
        $scope.messageRed=false;
      }
  }

  function countDishes (dishes){
    var listDishes = dishes.split(",");
    var numberOfDishes = 0;
    for(var i = 0; i < listDishes.length; i++){
      if(listDishes[i]!= "" && listDishes[i]!= " "){
        numberOfDishes+=1;
      }
    }
    return numberOfDishes;
  }
}

})();
