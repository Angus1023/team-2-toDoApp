angular.module("toDoApp").controller("toDoCtrl", function($scope,mainService){


$scope.toDos = [{todo:"wowow"}, {todo:"wowow"}, {todo:"wowow"}];



    $scope.add =  function (item) {
        $scope.toDos.push({todo:item});
        $scope.item = " "

    };
    $scope.delete = function(ind){
        $scope.toDos.splice(ind, 1);
    };
    $scope.edit = function(item,ind){
        $scope.toDos.splice(ind, 1);
        $scope.toDos.push({todo:item});
        $scope.item = " "
    }



});
