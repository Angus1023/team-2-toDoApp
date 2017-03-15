angular.module("toDoApp").controller("toDoCtrl", function($scope,mainService){


$scope.toDos = [{todo:"wowow"}, {todo:"wowow"}, {todo:"wowow"}];


$scope.add = function(todo, list){
    $scope.toDos = mainService.addToDo(todo,list);
}






});
