angular.module('toDoApp').service('mainService', function(){

	var id = 0;
	this.addToDo = function(toDo, list){
		list.push({toDo: toDo, checked: false, id: id});
		id++;
	};

	this.deleteToDo = function(toDoId, list){
		for(var i=0; i<list.length; i++){
			if(list[i].id === toDoId){
				return list.splice(i, 1);
			}
		}	
	};

	this.checkToDo = function(toDoId, list){
		for(var i=0; i<list.length; i++){
			if(list[i].id === toDoId){
				if(list[i].checked){ list[i].checked = false; }
				else{ list[i].checked = true; }
				return list;
			}
		}	
	};

});