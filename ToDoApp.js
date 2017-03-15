
angular.module("toDoApp",[ui.router]).config(function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.when("","/");
    $stateProvider
        .state("home",{
            templateUrl:"home/home.html",
            url:"/"
        }
            .state("todo",{
                templateUrl:"to-do/toDo.html",
                url:"toDo"
            })
    )

})