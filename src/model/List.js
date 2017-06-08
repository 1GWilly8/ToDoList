// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

    var ToDoList = {
        list: [],
        list.length: 0,

        addToList: function(text) {
            element = new Element;
            element.add(this.list.length, "Active", text);
            this.list[this.list.length] = element;
            console.log(this.list[this.list.length].text);
            console.log(this.list);
            this.list.length++
        },

        displayList: function(state) {
            var displayList = [];
        	if (state == "All"){
        		return this.list
        	}
                for (var i = this.list.length - 1; i >= 0; i--) {
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
            this.list.splice(id, 1);
            this.list.length = this.list.length;
            console.log(id)
            console.log(this.list)
        }
    }

module.exports = ToDoList;
