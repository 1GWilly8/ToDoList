// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

module.exports = function() {
	var ToDoList = {
		list: [],
		listLen: 0,

		addToList: function(text) {
			element = new Element,
			element.add(this.listLen, "Active", text),
			this.list[this.listLen] = element,
			console.log(this.list[this.listLen].text),
			console.log(this.list),
			this.listLen ++
		},

		displayList: function(state) {
			displayList: [];
			acc: 0;
			for (var i = this.listLen - 1; i >= 0; i--) {
				if (this.list[i].tag == state) {
					this.displayList[this.acc] = this.list[i],
					this.acc++
				}
			}
			//console.log(this.displayList);
			return this.displayList;
		},

		markCompleted: function(id) {	
			this.list[id].tag = "Completed",
			console.log(this.list)
		},

		removeFromList: function(id) {
			this.list.remove(id)
			this.listLen --;
			console.log(this.list)
		}
	}
	
	return ToDoList;
}
