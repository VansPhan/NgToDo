angular.module("ToDo", []).
controller("todoController", ["$scope", function($scope){
	$scope.todos = [
		{
			"title" : "Build a todo app",
			"done" : false
		}	
	];

	$scope.addToDo = function(){}
	$scope.clearCompleted = function(){}
}]);