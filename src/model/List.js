// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

    var ToDoList = {
        list: [],
        listLen: 0,

        addToList: function(text) {
            element = new Element;
            element.add(this.listLen, "Active", text);
            this.list[this.listLen] = element;
            console.log(this.list[this.listLen].text);
            console.log(this.list);
            this.listLen++
        },

        displayList: function(state) {
            var displayList = [];
        	if (state == "All"){
        		return this.list
        	}
                for (var i = this.listLen - 1; i >= 0; i--) {
                    console.log(i, this.list[i])
                    if (this.list[i].tag == state) {
                        displayList.push(this.list[i])
                    }
                }
            return displayList;
        },

        markCompleted: function(id) {
            this.list[id].tag = "Completed";
            console.log(this.list)
        },

        removeFromList: function(id) {
            this.list.remove(id)
            this.listLen--;
            console.log(this.list)
        }
    }

module.exports = ToDoList;
